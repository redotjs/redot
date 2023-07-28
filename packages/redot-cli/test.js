import test from 'node:test'
import assert from 'node:assert/strict'
import {fileURLToPath} from 'node:url'
import {execa} from 'execa'

test('redot-cli', async (t) => {
  await t.test('should show help on `--help`', async () => {
    const bin = fileURLToPath(new URL('cli.js', import.meta.url))

    const result = await execa(bin, ['--help'])

    assert.equal(
      result.stdout,
      [
        'Usage: redot [options] [path | glob ...]',
        '',
        '  Command line interface to inspect and change Graphviz dot files with redot',
        '',
        'Options:',
        '',
        '  -h  --help                              output usage information',
        '  -v  --version                           output version number',
        '  -o  --output [path]                     specify output location',
        '  -r  --rc-path <path>                    specify configuration file',
        '  -i  --ignore-path <path>                specify ignore file',
        '  -s  --setting <settings>                specify settings',
        '  -e  --ext <extensions>                  specify extensions',
        '  -u  --use <plugins>                     use plugins',
        '  -w  --watch                             watch for changes and reprocess',
        '  -q  --quiet                             output only warnings and errors',
        '  -S  --silent                            output only errors',
        '  -f  --frail                             exit with 1 on warnings',
        '  -t  --tree                              specify input and output as syntax tree',
        '      --report <reporter>                 specify reporter',
        '      --file-path <path>                  specify path to process as',
        '      --ignore-path-resolve-from dir|cwd  resolve patterns in `ignore-path` from its directory or cwd',
        '      --ignore-pattern <globs>            specify ignore patterns',
        '      --silently-ignore                   do not fail when given ignored files',
        '      --tree-in                           specify input as syntax tree',
        '      --tree-out                          output syntax tree',
        '      --inspect                           output formatted syntax tree',
        '      --[no-]stdout                       specify writing to stdout (on by default)',
        '      --[no-]color                        specify color in report (on by default)',
        '      --[no-]config                       search for configuration files (on by default)',
        '      --[no-]ignore                       search for ignore files (on by default)',
        '',
        'Examples:',
        '',
        '  # Process `input.dot`',
        '  $ redot input.dot -o output.dot',
        '',
        '  # Pipe',
        '  $ redot < input.dot > output.dot',
        '',
        '  # Rewrite all applicable files',
        '  $ redot . -o'
      ].join('\n'),
      'should show help'
    )
  })

  await t.test('should show version on `--version`', async () => {
    const bin = fileURLToPath(new URL('cli.js', import.meta.url))

    const result = await execa(bin, ['--version'])

    assert.ok(
      /redot: \d+\.\d+\.\d+/.test(result.stdout),
      'should include redot version'
    )

    assert.ok(
      /redot-cli: \d+\.\d+\.\d+/.test(result.stdout),
      'should include redot-cli version'
    )
  })
})
