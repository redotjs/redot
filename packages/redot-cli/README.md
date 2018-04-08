# redot-cli

[![Chat](https://img.shields.io/gitter/room/redotjs/Lobby.svg)](https://gitter.im/redotjs/Lobby)

## Installation

[npm](https://docs.npmjs.com/cli/install)

```bash
npm install redot-cli
```

## Usage

Command-line interface for [**redot**][remark].

*   Loads `redot-` plugins
*   Ignores paths found in [`.redotignore` files](https://github.com/unifiedjs/unified-engine/blob/master/doc/ignore.md)
*   Loads configuration from [`.redot`, `.redot.js` files](https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md)
*   Uses configuration from [`redotConfig` fields in `package.json`
    files](https://github.com/unifiedjs/unified-engine/blob/master/doc/configure.md)

## Usage

```bash
redot example.gv --output
```

## CLI

See [**unified-args**](https://github.com/unifiedjs/unified-args#cli), which provides the interface,
for more information on all available options.

```txt
Usage: redot [options] [path | glob ...]

  CLI to process graphviz with redot using plugins

Options:

  -h  --help                output usage information
  -v  --version             output version number
  -o  --output [path]       specify output location
  -r  --rc-path <path>      specify configuration file
  -i  --ignore-path <path>  specify ignore file
  -s  --setting <settings>  specify settings
  -e  --ext <extensions>    specify extensions
  -u  --use <plugins>       use plugins
  -w  --watch               watch for changes and reprocess
  -q  --quiet               output only warnings and errors
  -S  --silent              output only errors
  -f  --frail               exit with 1 on warnings
  -t  --tree                specify input and output as syntax tree
      --report <reporter>   specify reporter
      --file-path <path>    specify path to process as
      --tree-in             specify input as syntax tree
      --tree-out            output syntax tree
      --inspect             output formatted syntax tree
      --[no-]stdout         specify writing to stdout (on by default)
      --[no-]color          specify color in report (on by default)
      --[no-]config         search for configuration files (on by default)
      --[no-]ignore         search for ignore files (on by default)

Examples:

  # Process `input.gv`
  $ redot input.gv -o output.gv

  # Pipe
  $ redot < input.gv > output.gv

  # Rewrite all applicable files
  $ redot . -o
```
