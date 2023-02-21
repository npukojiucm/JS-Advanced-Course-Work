/* eslint-disable arrow-parens */
import PositionedCharacter from './PositionedCharacter';
import Bowman from '/src/js/characters/Bowman';
import Swordsman from '/src/js/characters/Swordsman';
import Magician from '/src/js/characters/Magician';
import Vampire from '/src/js/characters/Vampire';
import Undead from '/src/js/characters/Undead';
import Daemon from '/src/js/characters/Daemon';
import Team from './Team';
import {generateTeam} from './generators';



export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    // const playerCharacters = [Bowman, Swordsman, Magician];
    // const opponentCharacters = [Vampire, Undead, Daemon];

    // const playerTeam = generateTeam(playerCharacters, 3, 2);
    // const opponentTeam = generateTeam(opponentCharacters, 3, 2);
    const characterTeams = this.generateTeams();
    const positions = this.teamPositions(characterTeams);

    this.gamePlay.drawUi('prairie');
    this.gamePlay.redrawPositions(positions);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }

  teamPositions(characters) {
    const playerPositions = [];
    const opponentPositions = [];
    const positionedCharacter = [];

    for (let i = 0; i <= 8 * (8 - 1); i += 8) {
      if (i === 64) {
        break;
      }
      playerPositions.push(i);
      playerPositions.push(i + 1);
      opponentPositions.push(i + 6);
      opponentPositions.push(i + 7);
    }

    characters.forEach(character => {
      let position = 0;

      if (character instanceof Bowman || character instanceof  Swordsman || character instanceof  Magician) {
        position = this.randomInt(playerPositions.length);
        positionedCharacter.push(new PositionedCharacter(character, playerPositions[position]));
        playerPositions.splice(position, 1);
      } else {
        position = this.randomInt(opponentPositions.length);
        positionedCharacter.push(new PositionedCharacter(character, opponentPositions[position]));
        opponentPositions.splice(position, 1);
      }
    });

    return positionedCharacter;
  }

  randomInt(maxInt) {
    const min = Math.ceil(0);
    const max = Math.floor(maxInt + 1);
    const position = Math.floor(Math.random() * (max - min)) + min;

    return position;
  }

  generateTeams() {
    const playerCharacters = [Bowman, Swordsman, Magician];
    const opponentCharacters = [Vampire, Undead, Daemon];

    const playerTeam = generateTeam(playerCharacters, 3, 2);
    const opponentTeam = generateTeam(opponentCharacters, 3, 2);

    return [...playerTeam.characters, ...opponentTeam.characters];
  }
}
