import {expect, test} from '@jest/globals';
import Character from '../Character';
import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Undead from '../characters/Undead';
import Vampire from '../characters/Vampire';

test('Testing class creation. The parent Character class cannot be created.', () => {
  expect(() => {
    new Character(1);
  }).toThrow('Incorrect character type');
});

test.each`
character           | expectedClass
${new Bowman(1)}    | ${Bowman}
${new Daemon(1)}    | ${Daemon}
${new Magician(1)}  | ${Magician}
${new Swordsman(1)} | ${Swordsman}
${new Undead(1)}    | ${Undead}
${new Vampire(1)}   | ${Vampire}
`(
  'Testing class creation. Child classes of the Character class are created without errors.',
  ({ character, expectedClass }) => {
    expect(character).toBeInstanceOf(expectedClass);
  },
);

test.each`
character           | _attack  | _defence
${new Bowman(1)}    | ${25}    | ${25}
${new Daemon(1)}    | ${10}    | ${10}
${new Magician(1)}  | ${10}    | ${40}
${new Swordsman(1)} | ${40}    | ${10}
${new Undead(1)}    | ${40}    | ${10}
${new Vampire(1)}   | ${25}    | ${25}
`(
  'Testing the initial characteristics of the character',
  ({ character, _attack, _defence }) => {
    expect(character.attack).toBe(_attack);
    expect(character.defence).toBe(_defence);
  },
);
