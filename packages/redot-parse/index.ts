import { AST } from "@ts-graphviz/parser";
import type { Processor } from "unified";
import type { VFile } from "vfile";

/**
 * migrate ts-graphviz AST.Dot to unist compatible DOTAST node
 *
 * @param node AST.Dot node to transform
 * @returns unist compatible node
 */
export function dotToDotast<Node extends { body?: unknown[] }>({
  body,
  ...node
}: Node): Node extends { body: unknown[] }
  ? Omit<Node, "body"> & { children: Node["body"] }
  : Node {
  if (body) {
    // @ts-expect-error flow analysis isn't able to match this to the condition
    return {
      ...node,
      // @ts-expect-error flow analysis isn't able to match this
      children: body.map((child: unknown) => dotToDotast(child)),
    };
  }
  // @ts-expect-error flow analysis isn't able to match this to the condition
  return node;
}

/**
 * DOT Abstract Syntax Tree Node
 */
export interface DOTAST extends Omit<AST.Dot, "body"> {
  children: AST.Dot["body"];
}

/**
 * ts-graphviz wrapper
 *
 * @param doc document to parse
 * @param file vfile to process
 * @returns dot abstract syntax tree
 */
export function parse(doc: string, file?: VFile): DOTAST {
  try {
    return dotToDotast(AST.parse(file?.value.toString() ?? doc));
  } catch (err) {
    file?.fail(err.message, err.location, "redot-parse");
    throw err;
  }
}

/**
 * Parser to take a graphviz dot file and generate an abstract syntax tree
 *
 * @param this processor context
 */
export function parserPlugin(this: Processor): void {
  this.Parser = parse;
}

export default parserPlugin;
