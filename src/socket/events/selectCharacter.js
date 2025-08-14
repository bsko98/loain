import { CharacterEntityMapper } from "../../mappers/entityMappers/characterEntityMapper"

export const selectCharacterEventHandler = (states) => {
    return {
        name: "selectCharacter",
        handle: (data) => {
            if(data.status === "error") {
                console.log("Error");
                return;
            }

            const selectedCharacter = CharacterEntityMapper.toInternal(data.character);

            states.myData.userData.chooseCharacter = selectedCharacter;

            states.setMyData({...states.myData});
            console.log(`캐릭터 선택 완료`)
        }
    }
}