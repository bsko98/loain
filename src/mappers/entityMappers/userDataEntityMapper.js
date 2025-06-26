import { CharacterEntityMapper } from "./characterEntityMapper";


export class UserDataEntityMapper {
    static toInternal(userData) {
        return {
            id: userData.id,
            chooseCharacter: userData.chooseCharacter?CharacterEntityMapper.toInternal(userData.chooseCharacter):undefined,
            joinedPartyId: userData.joinedPartyId,
            volunteerParties: userData.volunteerParties,
        }
    }
}