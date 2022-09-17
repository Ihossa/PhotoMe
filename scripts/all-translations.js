const fs = require('fs');
const Table = require('cli-table');
const color = require('bash-color');

const localesDir = './public/locales';
const localesRelativeDir = './public/locales';

const table = new Table({
  head: ['Key', 'Value'],
  colWidths: [100, 50],
});

const locales = fs.readdirSync(localesDir);

locales.forEach(locale => {
  if (!fs.lstatSync(`${localesDir}/${locale}`).isDirectory()) {
    return;
  }

  table.push([color.wrap(locale, color.colors.BLUE), '']);

  const namespaces = fs.readdirSync(`${localesDir}/${locale}`);

  namespaces.forEach(path => {
    const file = path.split('.')[0];
    const fullPath = `${localesRelativeDir}/${locale}/${path}`;
    const contents = JSON.parse(fs.readFileSync(fullPath).toString());

    table.push([color.wrap(file, color.colors.CYAN), '']);

    const keys = getTranslationsFromFile(contents, file);

    for (const key in keys) {
      table.push([color.wrap(key, color.colors.GREEN), keys[key]]);
    }
  });

  console.log(table.toString());
});

function getTranslationsFromFile(json, file, prefix = '') {
  let result = {};

  for (const key in json) {
    if (typeof json[key] === 'object') {
      result = { ...result, ...getTranslationsFromFile(json[key], file, key) };
    } else {
      const translationKey = prefix ? `${prefix}.${key}` : key;

      result[`${file}:${translationKey}`] = json[key];
    }
  }

  return result;
}
