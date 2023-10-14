import Character from './Character';

export default class PropertiesAttack extends Character {
  constructor(name, attack, stoned, range) {
    super(name, attack, stoned);
    this.range = range;
  }

  getStoned() {
    return this.stoned;
  }

  // value - boolean
  setStoned(value) {
    this.stoned = value;
  }

  getAttack() {
    let attack = this.attack;
    attack -= attack * ((this.range - 1) / 10);
    if (this.getStoned()) {
      attack -= Math.log2(this.range) * 5;
    }
    if (attack > 0) {
      return Math.floor(attack);
    }
    return 0
  }

  //this is value of base attack
  setAttack(value) {
    this.attack = value;
  }
}