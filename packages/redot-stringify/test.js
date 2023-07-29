import {test} from 'node:test'
import assert from 'node:assert/strict'
import {unified} from 'unified'
import redotStringify from './index.js'

test('should stringify a directed graph', () => {
  assert.deepEqual(
    unified()
      .use(redotStringify)
      .stringify({
        type: 'Dot',
        children: [{type: 'Graph', directed: true, strict: false, children: []}]
      }),
    'digraph {}'
  )
})
