# redot-stringify

[Compiler](https://github.com/unifiedjs/unified#processorcompiler) for [**unified**](https://github.com/unifiedjs/unified). Stringifies an
[**DOTAST**](https://github.com/redotjs/dotast) syntax tree to graphviz. Used in the [**redot**
processor](https://github.com/redotjs/redot).

## Installation

[npm](https://docs.npmjs.com/cli/install)

```bash
npm install redot-stringify
```

## Usage


```js
var unified = require('unified');
var createStream = require('unified-stream');
var parse = require('redot-parse');
var stringify = require('redot-stringify');

var processor = unified()
  .use(parse)
  .use(stringify);

process.stdin
  .pipe(createStream(processor))
  .pipe(process.stdout);
```
