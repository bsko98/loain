import { CharacterEntityMapper } from "./characterEntityMapper";

export class MyDataEntityMapper {
    static toInternal(myData) {
        return {
            stoveId: myData.stoveId,
            characters: myData.characters.map(CharacterEntityMapper.toInternal),
            userData: undefined,
        }
    }
}