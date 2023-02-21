import {expect, test} from '@jest/globals';
import { characterGenerator, generateTeam } from '../generators';
import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Undead from '../characters/Undead';
import Vampire from '../characters/Vampire';

const types = [Bowman, Daemon, Magician, Swordsman, Undead, Vampire];

test.each`
count | typeCharacter
${3}  | ${types}
${5}  | ${types}
${10} | ${types}
${15} | ${types}
${20} | ${types}
`
(
  `The generator-function characterGenerator generates any number $count of instances.`,
  ({ count, typeCharacter }) => {
    const characters = [];
    const generator = characterGenerator(typeCharacter, 3);

    for (let i = 0; i < count; i += 1) {
      characters.push(generator.next().value);
    }

    expect(characters.length).toBe(count);
  },
);

test.each`
allowedTypes | maxLevel | characterCount
${types}     | ${1}     | ${3}
${types}     | ${2}     | ${6}
${types}     | ${3}     | ${9}
${types}     | ${4}     | ${12}
`
(
  `The function generateTeam correctly generates the specified number $characterCount of characters
  and their level $maxLevel.`,
  ({ allowedTypes, maxLevel, characterCount }) => {
    const team = generateTeam(allowedTypes, maxLevel, characterCount);

    expect(team.characters).toHaveLength(characterCount);

    team.characters.forEach(character => {
      expect(character.level).toBeGreaterThan(0);
      expect(character.level).toBeLessThanOrEqual(maxLevel);
    });
  },
);
