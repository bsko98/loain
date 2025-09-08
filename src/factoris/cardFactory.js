export class CardFactory {
  static create(name = undefined, awakening = undefined) {
    return {
      name: name,
      awakening: awakening,
    };
  }
}
