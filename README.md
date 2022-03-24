## Description

This package was created to simplify versioning process in local development. 
It does the next things:
* properly updates package version (1) using specific command (major, minor, patch)
* saves version changes to the package.json file
* commits the package.json file (2) and optionally crate new git tag related to new version

1) https://docs.npmjs.com/about-semantic-versioning
2) https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716

## Usage
Install package
```shell

npm i --save-dev versincremo 

```
Add configuration at the root of your project package.json, 
additionally specify usage of versincremo at the scripts section

```json
{
  "version": "1.0.0",
  "name": "yourPackageName",
  "scripts": {
    "patch": "node node_modules/versincremo patch",
    "minor": "node node_modules/versincremo minor",
    "major": "node node_modules/versincremo major"
  },
  "versincremo": {
    "tag": true, 
    "scope": ""
  }
}
```

Example of patch with optional subject:
```shell
npm run patch 'fixed something'
```

Example of minor update with optional subject:
```shell
npm run minor 'release'
```

Example of major update:
```shell
npm run major
```
