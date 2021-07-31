# redot-stringify

[![NPM Version](https://img.shields.io/npm/v/redot-stringify.svg)](https://www.npmjs.com/package/redot-stringify)
[![Build Status](https://github.com/redotjs/redot/workflows/CI/badge.svg)](https://github.com/redotjs/redot/actions)
[![Chat](https://img.shields.io/badge/chat-discussions-success.svg)](https://github.com/redotjs/redot/discussions)

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
var unified = require("unified");
var createStream = require("unified-stream");
var parse = require("redot-parse");
var stringify = require("redot-stringify");

var processor = unified()
  .use(parse)
  .use(stringify);

process.stdin.pipe(createStream(processor)).pipe(process.stdout);
```
