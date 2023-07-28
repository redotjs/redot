// eslint-disable-next-line n/file-extension-in-import
import {parse} from 'ts-graphviz/ast'

/** @type {import('unified').ParserFunction<import('ts-graphviz/ast').DotASTNode>} */
function parser(document, vfile) {
  return parse(document, {startRule: 'Dot', filename: vfile.path})
}

/**
 * @this {import('unified').Processor}
 * @type {import('unified').Plugin<void[], string, import('ts-graphviz/ast').DotASTNode>}
 */
function redotParse() {
  this.Parser = parser
}

export default redotParse
