/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */
export default class Character {
  constructor(level) {
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = new.target.name.toLowerCase();

    if (new.target.name === 'Character') throw new TypeError('Incorrect character type');
  }
}
