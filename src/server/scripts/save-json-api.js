const { copyFileSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const output = join(__dirname, '../../../build');
const dataDirectory = join(output, 'static', 'db');
mkdirSync(dataDirectory, { recursive: true });
copyFileSync(join(__dirname, '../db/data.json'), join(dataDirectory, 'data.json'));
copyFileSync(join(output, 'index.html'), join(output, '404.html'));
