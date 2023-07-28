import {test} from 'node:test'
import assert from 'node:assert/strict'
import {unified} from 'unified'
import {visit} from 'unist-util-visit'
import redotParse from './index.js'

/**
 * @param {import('ts-graphviz/ast').DotASTNode} tree
 */
function removeLocation(tree) {
  visit(tree, (node) => {
    delete node.location
  })
  return tree
}

test('should parse a directed graph', () => {
  assert.deepEqual(
    // @ts-expect-error Processor type doesn't match
    removeLocation(unified().use(redotParse).parse('digraph {}')),
    {
      type: 'Dot',
      children: [{type: 'Graph', directed: true, strict: false, children: []}]
    }
  )
})
