const fs = require('fs');

const isObject = value => value !== null && typeof value === 'object';
const isString = value => typeof value === 'string';

module.export = argument => {

    const manifest = isObject(argument) ? argument : JSON.parse(fs.readFileSync(isString(argument) ? argument : './package.json'));

    // taken from https://github.com/npm/cli/blob/ab22c43a6a5ddcd9b59eb3df3db4e1a0dffdcaaa/lib/pack.js#L39
    return `${manifest.name}-${manifest.version}.tgz`.replace(/^@/, '').replace(/\//, '-')
}
