import {test} from 'node:test'
import assert from 'node:assert/strict'
import {redot} from './index.js'

test('should roundtrip a directed graph', () => {
  assert.deepEqual(redot().processSync('digraph {}').value, 'digraph {}')
})
