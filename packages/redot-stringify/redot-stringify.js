"use strict";

var compile = function compile(doc) {
  return JSON.stringify(doc);
};

function parserFactory() {
  this.Compiler = compile;
}

parserFactory.Compiler = compile;

module.exports = parserFactory;
