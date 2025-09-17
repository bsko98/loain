import {UserDataEntityMapper} from "../../mappers/entityMappers/userDataEntityMapper"

export const closePartyEventHandler = (states) => {
    return {
        name: "closeParty",
        handle: (data) => {
            if(data.status === "error") {
                console.log("Error");
                return;
            }
            states.myParty.partyId = data.partId;
            states.myParty.allow = data?.allow ? data.allow : undefined;
            states.myParty.volunteers = data?.volunteers ? data.volunteers.map((volunteers) => UserDataEntityMapper.toInternal(volunteers)): undefined;
            states.setMyParty({...states.myParty});
            console.log(`파티 마감`)
        }
    }
}