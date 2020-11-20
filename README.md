# npm-pack-filename

## Install

```
npm i npm-pack-filename
```

## Use

Returns the `npm pack` .tgz filename for current project.

**Example:**

```js
const npmPackFilename = require('npm-pack-filename');

const fs = require('fs');
const filename = './package.json';
const packageJson = JSON.parse(fs.readFileSync(filename));

console.log(npmPackFilename());
console.log(npmPackFilename(filename));
console.log(npmPackFilename(packageJson));
```
