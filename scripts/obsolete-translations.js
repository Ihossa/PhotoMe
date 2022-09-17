const fs = require('fs');
const { getFilesFromDir, search } = require('search-in-file');
const colors = require('bash-color');
const argv = require('minimist')(process.argv.slice(2));

const sourcesDir = process.cwd() + '/';
const localesDir = './public/locales';
const localesRelativeDir = './public/locales';
const defaultNamespace = 'translation';
const configPath = './scripts/config/i18n.json';
const config = JSON.parse(fs.readFileSync(configPath).toString());

(async () => {
  const files = (await getFilesFromDir(sourcesDir, true)).filter(file => {
    if (file.indexOf('node_modules/') !== -1) {
      return false;
    }

    const extension = file.split('.')[1];

    return ['ts', 'tsx', 'js'].includes(extension);
  });

  let allFilesContents = '';

  files.forEach(file => {
    allFilesContents += fs.readFileSync(file).toString();
  });

  // Keys which are has been already reported in some locale
  const reportedKeys = [];

  const locales = fs.readdirSync(localesDir);
  let success = true;

  locales.forEach(locale => {
    if (!fs.lstatSync(`${localesDir}/${locale}`).isDirectory()) {
      return;
    }

    const namespaces = fs.readdirSync(`${localesDir}/${locale}`);

    namespaces.forEach(path => {
      const file = path.split('.')[0];
      const fullPath = `${localesRelativeDir}/${locale}/${path}`;
      const contents = JSON.parse(fs.readFileSync(fullPath).toString());

      const keys = getAllKeys(contents, file);
      const missingKeys = [];

      keys.forEach(async key => {
        const foundFiles = search(allFilesContents, key);

        if (!foundFiles) {
          if (config && config.ignoredKeys.includes(key)) {
            // Ignored key
            return;
          }

          if (reportedKeys.includes(key)) {
            // Already has been reported
            return;
          }

          missingKeys.push(key);
          reportedKeys.push(key);
        }
      });

      if (missingKeys.length > 0) {
        success = false;

        console.log(`${colors.green(fullPath)}:`);

        missingKeys.forEach(key => {
          console.log(`${colors.yellow(key)} not used anymore`);
        });

        // Make new line after keys
        console.log('');
      }
    });
  });

  if (argv.check && !success) {
    // Return error code (only with --check flag)
    process.exit(1);
  }
})();

function getAllKeys(json, file, prefix = '') {
  let result = [];

  for (const key in json) {
    if (typeof json[key] === 'object') {
      result = result.concat(getAllKeys(json[key], file, prefix ? `${prefix}.${key}` : key));
    } else {
      const translationKey = prefix ? `${prefix}.${key}` : key;

      if (file === defaultNamespace) {
        result.push(translationKey);
      } else {
        result.push(`${file}:${translationKey}`);
      }
    }
  }

  return result;
}
