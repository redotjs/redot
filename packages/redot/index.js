import {unified} from 'unified'
import redotParse from 'redot-parse'
import redotStringify from 'redot-stringify'

// @ts-expect-error processor type on redotParse doesn't match
export const redot = unified().use(redotParse).use(redotStringify).freeze()
