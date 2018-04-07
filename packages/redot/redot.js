"use strict";

var unified = require("unified");
var parse = require("redot-parse");
var stringify = require("redot-stringify");

module.exports = unified()
  .use(parse)
  .use(stringify)
  .freeze();
