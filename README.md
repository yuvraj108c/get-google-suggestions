[![NPM Version](http://img.shields.io/npm/v/get-google-suggestions.svg?style=flat)](https://www.npmjs.org/package/get-google-suggestions)
[![NPM Downloads](https://img.shields.io/npm/dm/get-google-suggestions.svg?style=flat)](https://npmcharts.com/compare/get-google-suggestions?minimal=true)
[![Issues](https://img.shields.io/github/issues/yuvraj108c/get-google-suggestions)](https://github.com/yuvraj108c/get-google-suggestions/issues)

# Get Google Suggestions

Get google suggestions for any query via NodeJS.

## Install

```bash
npm install get-google-suggestions
```

## Import

```js
import getGoogleSuggestions from 'getGoogleSuggestions'; // ES module

const getGoogleSuggestions = require('getGoogleSuggestions'); // commonJS
```

## Usage

```js
const suggestions = await getGoogleSuggestions('nodejs');
console.log(suggestions);
// [
//   'nodejs download',
//   'nodejs tutorials',
//   'nodejs framework',
//   'nodejs interview questions github',
//   'nodejs fetch',
//   'nodejs versions',
//   'nodejs documentation',
//   'nodejs express'
// ]
```

## License

MIT
