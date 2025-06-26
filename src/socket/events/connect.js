import { MyDataEntityMapper } from "../../mappers/entityMappers/myDataEntityMapper";
import { UserDataEntityMapper } from "../../mappers/entityMappers/userDataEntityMapper"

export const connectEventHandler = (states) => {
    return {
        name: "connectEvent",
        handle: (data) => {
            if(data.status === "error") {
                console.log("Connect Error");
                return;
            }
            states.myData = MyDataEntityMapper.toInternal(data);
            states.myData.userData = UserDataEntityMapper.toInternal({
                id: data.id,
                chooseCharacter: undefined,
                joinedPartyId: undefined,
                volunteerParties: [],
            })
            states.setMyData({...states.myData});
            console.log(`Connect!`)
        }
    }
}