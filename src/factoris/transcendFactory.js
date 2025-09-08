export class TranscendFactory {
  static create(weapon = undefined, armor = undefined) {
    return {
      weapon: weapon,
      armor: armor,
    };
  }
}
