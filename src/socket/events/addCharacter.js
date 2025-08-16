import { CharacterEntityMapper } from "../../mappers/entityMappers/characterEntityMapper"

export const addCharacterEventHandler = (states) => {
    return {
        name: "addCharacter",
        handle: (data) => {
            if(data.status === "error") {
                console.log("Error");
                alert("캐릭터 추가 실패")
                return;
            }

            const addedCharacter = CharacterEntityMapper.toInternal(data.character);
            
            states.myData.characters.push(addedCharacter);

            states.setMyData({...states.myData});
            console.log(`캐릭터 추가 완료`)
        }
    }
}