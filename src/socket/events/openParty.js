
export const openPartyEventHandler = (states) => {
    return {
        name: "openParty",
        handle: (data) => {
            if(data.status === "error") {
                console.log("Error");
                return;
            }
            states.myParty.partyId = data.partId;
            states.myParty.allow = data.allow;
            states.setMyParty({...states.myParty});
            console.log(`파티 공개`)
        }
    }
}