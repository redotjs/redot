# redot-parse

[![NPM Version](https://img.shields.io/npm/v/redot-parse.svg)](https://www.npmjs.com/package/redot-parse)
[![Build Status](https://travis-ci.org/redotjs/redot.svg?branch=master)](https://travis-ci.org/redotjs/redot)
[![Chat](https://img.shields.io/gitter/room/redotjs/Lobby.svg)](https://gitter.im/redotjs/Lobby)

[Parser](https://github.com/unifiedjs/unified#processorparser) for [**unified**](https://github.com/unifiedjs/unified). Parses graphviz to an
[**dotast**](https://github.com/redotjs/dotast) syntax tree. Used in the [**redot**
processor](https://github.com/redotjs/redot).

## Installation

[npm](https://docs.npmjs.com/cli/install)

```bash
npm install redot-parse
```

## Usage

```js
var unified = require("unified");
var createStream = require("unified-stream");
var graphviz = require("redot-parse");
var stringify = require("redot-stringify");

var processor = unified()
  .use(graphviz)
  .use(stringify);

process.stdin.pipe(createStream(processor)).pipe(process.stdout);
```
