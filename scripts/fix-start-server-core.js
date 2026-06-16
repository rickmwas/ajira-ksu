import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const packagePath = join('node_modules', '@tanstack', 'start-server-core', 'package.json');

if (!existsSync(packagePath)) {
  process.exit(0);
}

const raw = readFileSync(packagePath, 'utf8');
const json = JSON.parse(raw);
const imports = json.imports ?? {};

const requiredImports = {
  '#tanstack-start-server-fn-resolver': {
    default: './dist/esm/fake-start-server-fn-resolver.js',
  },
  '#tanstack-start-plugin-adapters': {
    default: './dist/esm/empty-plugin-adapters.js',
  },
  '#tanstack-start-entry': {
    default: '@tanstack/start-client-core/dist/esm/fake-entries/start.js',
  },
  '#tanstack-router-entry': {
    default: '@tanstack/start-client-core/dist/esm/fake-entries/router.js',
  },
};

let changed = false;
for (const [key, value] of Object.entries(requiredImports)) {
  if (!Object.prototype.hasOwnProperty.call(imports, key) || JSON.stringify(imports[key]) !== JSON.stringify(value)) {
    imports[key] = value;
    changed = true;
  }
}

if (changed) {
  json.imports = imports;
  writeFileSync(packagePath, JSON.stringify(json, null, 2) + '\n', 'utf8');
}
