import { cardNameData } from '../dataMapTransformer';

export class CardEntityMapper {
  static toInternal(card) {
    return {
      name: cardNameData.toInternal(card.name),
      awakening: card.awakening,
    };
  }
}
