import {
  classNameData,
  serverNameData,
  titleNameData,
} from '../dataMapTransformer';
import { CardEntityMapper } from './cardEntityMapper';

export class CharacterEntityMapper {
  static toInternal(character) {
    return {
      characterId: character.characterId,
      name: character.name,
      serverName: character.serverName
        ? serverNameData.toInternal(character.serverName)
        : undefined,
      job: character.job ? classNameData.toInternal(character.job) : undefined,
      imageUrl: character.imageUrl,
      itemLevel: character.itemLevel,
      arkPassive: character.arkPassive,
      transcend: character.transcend,
      titles: character.title.map(title => titleNameData.toInternal(title)),
      cards: character.card.map(CardEntityMapper.toInternal),
    };
  }
}
