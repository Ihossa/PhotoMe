const fs = require('fs');
const chalk = require('chalk');
const i18nConfig = require('./config/i18n');

module.exports = {
    input: [
        'components/**/*.{js,jsx,ts,tsx}',
        'pages/**/*.{js,jsx,ts,tsx}',
        'shared/**/*.{js,jsx,ts,tsx}',
        'modules/**/*.{js,jsx,ts,tsx}',
        // Use ! to filter out files or directories
        '!**/node_modules/**',
    ],
    output: './',
    options: {
        // debug: true,
        plural: false,
        func: {
            list: ['i18next.t', 'i18n.t', 't'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        /*trans: {
          component: 'Trans',
          i18nKey: 'i18nKey',
          defaultsKey: 'defaults',
          extensions: ['.js', '.jsx'],
          fallbackKey: function(ns, value) {
            return value;
          },
          acorn: {
            ecmaVersion: 2020,
            sourceType: 'module', // defaults to 'module'
            // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
          }
        },*/
        lngs: i18nConfig.supportedLngs,
        ns: i18nConfig.namespaces,
        defaultLng: i18nConfig.defaultLocale,
        defaultNs: 'translation',
        defaultValue: '__NOT_TRANSLATED__',
        resource: {
            loadPath: 'public/locales/{{lng}}/{{ns}}.json',
            savePath: 'public/locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n',
        },
        nsSeparator: ':', // namespace separator
        keySeparator: '.', // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}',
        },
    },
    transform: function customTransform(file, enc, done) {
        'use strict';
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
            parser.set(
                key,
                Object.assign({}, options, {
                    nsSeparator: false,
                    keySeparator: false,
                })
            );
            ++count;
        });

        if (count > 0) {
            console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
        }

        done();
    },
};
