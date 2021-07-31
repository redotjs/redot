import { test } from "uvu";
import { throws, type } from "uvu/assert";

import { unified } from "unified";
import { parserPlugin, parse } from "./index.js";

test("can parse graphviz", () => {
  type(
    parse(
      `digraph example {
  # comment
  node1 [
    label = "My Node",
  ]
}`
    ),
    "object"
  );
});

test("fails on invalid", () => {
  throws(() => parse(`not valid`));
});

test("can run as a plugin", () => {
  type(
    unified().use(parserPlugin).parse(`digraph example {
    # comment
    node1 [
      label = "My Node",
    ]
  }`),
    "object"
  );
});

test.run();
