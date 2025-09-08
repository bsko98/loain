import { PartyEntityMapper } from '../../mappers/entityMappers/partyEntityMapper';

export const createPartyEventHandler = states => {
  return {
    name: 'createParty',
    handle: data => {
      if (data.status === 'error') {
        console.log('파티 생성 실패.');
        return;
      }
      states.myParty = PartyEntityMapper.toInternal(data.partyData);
      states.setMyarty({ ...states.myParty });
      console.log(`파티 생성 완료`);
    },
  };
};
