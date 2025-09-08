import { BOSS_NAME_MAP } from './bossNameMap';
import { CARD_NAME_MAP } from './cardNameMap';
import { CLASS_NAME_MAP } from './classNameMap';
import { SERVER_NAME_MAP } from './serverNameMap';
import { TITLE_NAME_MAP } from './titleNameMap';

class DataMapTransformer {
  constructor(mapping) {
    this.externalToInternal = mapping;
    this.internalToExternal = Object.entries(mapping).reduce(
      (acc, [ext, int]) => {
        acc[int] = ext;
        return acc;
      },
      {}
    );
  }
  toInternal(externalData) {
    const id = this.externalToInternal[externalData];
    return id;
  }
  toExternal(internalData) {
    const name = this.internalToExternal[internalData];
    return name;
  }
}

const bossNameData = new DataMapTransformer(BOSS_NAME_MAP);
const classNameData = new DataMapTransformer(CLASS_NAME_MAP);
const titleNameData = new DataMapTransformer(TITLE_NAME_MAP);
const cardNameData = new DataMapTransformer(CARD_NAME_MAP);
const serverNameData = new DataMapTransformer(SERVER_NAME_MAP);

export {
  bossNameData,
  classNameData,
  titleNameData,
  cardNameData,
  serverNameData,
};
