import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const [, , sourceArgument, outputArgument = 'src/data/glossaryTerms.ts'] = process.argv;

if (!sourceArgument) {
  throw new Error('Usage: node scripts/import-glossary.mjs <source.tex> [output.ts]');
}

const source = readFileSync(resolve(sourceArgument), 'utf8');
const expectedFields = ['Definition', 'Application', 'Example', 'Common confusion', 'Related terms'];
const entries = [];
let part = 1;
let section = 0;

function cleanLatex(value) {
  const cleaned = value
    .replace(/``|''/g, '"')
    .replace(/--/g, '-')
    .replace(/\\%/g, '%')
    .replace(/\$\\pm1\$/g, '±1')
    .replace(/\$([+-]?\d+)\$/g, '$1')
    .replace(/VO\$_2\$/g, 'VO₂')
    .replace(/\s+/g, ' ')
    .trim();

  if (/\\[A-Za-z]+|\$|[{}]/.test(cleaned)) {
    throw new Error(`Unsupported LaTeX in glossary text: ${cleaned}`);
  }

  return cleaned;
}

const blockPattern = /\\section\*?\{([^{}]+)\}|\\begin\{glossaryentry\}\{([^{}]+)\}([\s\S]*?)\\end\{glossaryentry\}/g;
let block;

while ((block = blockPattern.exec(source)) !== null) {
  if (block[1]) {
    if (/^Part II/.test(block[1])) {
      part = 2;
    } else if (!/How to Use|Quick Comparison|^Part I/.test(block[1])) {
      section += 1;
    }
    continue;
  }

  const fields = Object.fromEntries(
    Array.from(block[3].matchAll(/\\entryfield\{([^{}]+)\}\{([^{}]*)\}/g), (field) => [field[1], cleanLatex(field[2])]),
  );
  const missingFields = expectedFields.filter((field) => !fields[field]);
  if (missingFields.length > 0) {
    throw new Error(`${block[2]} is missing: ${missingFields.join(', ')}`);
  }

  const term = cleanLatex(block[2]);
  entries.push({
    id: term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    term,
    part,
    section,
    definition: fields.Definition,
    application: fields.Application,
    example: fields.Example,
    commonConfusion: fields['Common confusion'],
    relatedTerms: fields['Related terms'].split(/;\s*/),
  });
}

if (entries.length !== 51 || section !== 10) {
  throw new Error(`Expected 51 terms across 10 sections; found ${entries.length} terms across ${section} sections.`);
}

const ids = entries.map((entry) => entry.id);
if (new Set(ids).size !== ids.length) {
  throw new Error('Glossary term IDs must be unique.');
}

const output = `export type GlossaryTerm = {
  id: string;
  term: string;
  part: 1 | 2;
  section: number;
  definition: string;
  application: string;
  example: string;
  commonConfusion: string;
  relatedTerms: string[];
};

export const glossaryTerms: GlossaryTerm[] = ${JSON.stringify(entries, null, 2)};
`;

writeFileSync(resolve(outputArgument), output);
console.log(`Imported ${entries.length} glossary terms across ${section} sections into ${outputArgument}.`);