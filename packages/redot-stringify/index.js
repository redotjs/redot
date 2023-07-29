// eslint-disable-next-line n/file-extension-in-import
import {stringify} from 'ts-graphviz/ast'

/** @type {import('unified').CompilerFunction<import('ts-graphviz/ast').DotASTNode>} */
function compiler(tree) {
  return stringify(tree)
}

/**
 * @this {import('unified').Processor}
 * @type {import('unified').Plugin<void[], import('ts-graphviz/ast').DotASTNode, string>}
 */
function redotParse() {
  this.Compiler = compiler
}

export default redotParse
