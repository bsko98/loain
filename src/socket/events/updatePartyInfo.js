import { PartyEntityMapper } from "../../mappers/entityMappers/partyEntityMapper";

export const updatePartyInfoEventHandler = (states) => {
  return {
    name: "updatePartyInfo",
    handle: (data) => {
      if (data.status === "error") {
        console.log("Error");
        return;
      }
      states.myParty = PartyEntityMapper.toInternal(data.partyData);
      states.setMyParty({ ...states.myParty });
      console.log(`파티 정보 수정 성공했습니다.`);
    },
  };
};
