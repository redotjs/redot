#!/usr/bin/env node
import {createRequire} from 'node:module'
import {args} from 'unified-args'
// eslint-disable-next-line import/order
import {redot} from 'redot'

const require = createRequire(import.meta.url)

const proc = require('redot/package.json')
const cli = require('./package.json')

const extensions = ['dot', 'gv']

args({
  processor: redot,
  name: proc.name,
  description: cli.description,
  version: [
    proc.name + ': ' + proc.version,
    cli.name + ': ' + cli.version
  ].join(', '),
  pluginPrefix: proc.name,
  packageField: proc.name + 'Config',
  rcName: '.' + proc.name + 'rc',
  ignoreName: '.' + proc.name + 'ignore',
  extensions
})
