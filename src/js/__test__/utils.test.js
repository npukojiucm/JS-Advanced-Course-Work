import {expect, test} from '@jest/globals';
import { calcTileType as calc } from '../utils';

test.each`
index  | borderSize | expected
${0}   | ${8}       | ${'top-left'}
${7}   | ${8}       | ${'top-right'}
${56}  | ${8}       | ${'bottom-left'}
${63}  | ${8}       | ${'bottom-right'}
${2}   | ${8}       | ${'top'}
${5}   | ${8}       | ${'top'}
${58}  | ${8}       | ${'bottom'}
${60}  | ${8}       | ${'bottom'}
${16}  | ${8}       | ${'left'}
${32}  | ${8}       | ${'left'}
${15}  | ${8}       | ${'right'}
${31}  | ${8}       | ${'right'}
${20}  | ${8}       | ${'center'}
${45}  | ${8}       | ${'center'}
${0}   | ${7}       | ${'top-left'}
${6}   | ${7}       | ${'top-right'}
${42}  | ${7}       | ${'bottom-left'}
${48}  | ${7}       | ${'bottom-right'}
${2}   | ${7}       | ${'top'}
${5}   | ${7}       | ${'top'}
${43}  | ${7}       | ${'bottom'}
${46}  | ${7}       | ${'bottom'}
${7}   | ${7}       | ${'left'}
${21}  | ${7}       | ${'left'}
${13}  | ${7}       | ${'right'}
${27}  | ${7}       | ${'right'}
${8}   | ${7}       | ${'center'}
${16}  | ${7}       | ${'center'}
`('returns $expected when $index is added to $borderSize', ({ index, borderSize, expected }) => {
  expect(calc(index, borderSize)).toBe(expected);
});
