import { CharacterEntityMapper } from "../../mappers/entityMappers/characterEntityMapper"

export const updateCharacterEventHandler = (states) => {
    return {
        name: "",
        handle: (data) => {
            if(data.status === "error") {
                console.log("Error");
                alert("캐릭터 갱신중 에러가 발생했습니다.\n다시 시도해주세요");
                return;
            }

            const updatedCharacter = CharacterEntityMapper.toInternal(data.character);
            const updatedCharacters = states.myData.characters.map(character=>{
                if(character.name===updatedCharacter.name){
                    return updatedCharacter;
                }
                return character; 
            });

            states.myData.characters = updatedCharacters;
            states.setMyData({...states.myData});
            console.log(`!`)
        }
    }
}