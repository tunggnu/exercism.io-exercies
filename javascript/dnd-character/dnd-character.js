export const abilityModifier = (score) => {
  const modifier = Math.floor((score - 10) / 2);

  if (score < 3) throw new Error('Ability scores must be at least 3');
  if (score > 18) throw new Error('Ability scores can be at most 18');

  return modifier;
};

export class Character {
  constructor() {
    [
      this._strength,
      this._dexterity,
      this._constitution,
      this._intelligence,
      this._wisdom,
      this._charisma,
    ] = new Array(6).fill(1).map(Character.rollAbility);
  }

  static rollAbility() {
    const fnRollDice = () => Math.floor(Math.random() * 6) + 1;
    const scores = [0, 1, 2, 3].map(fnRollDice);

    return scores.reduce((acc, score) => acc + score) - Math.min(...scores);
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}
