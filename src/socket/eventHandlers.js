import { acceptVolunteerEventHandler } from './events/acceptVolunteer';
import { addCharacterEventHandler } from './events/addCharacter';
import { addVolunteerEventHandler } from './events/addVolunteer';
import { breakPartyEventHandler } from './events/breakParty';
import { cancelVolunteerEventHandler } from './events/cancelVolunteer';
import { chatEventHandler } from './events/chat';
import { closePartyEventHandler } from './events/closeParty';
import { connectEventHandler } from './events/connect';
import { createCharacterEventHandler } from './events/createCharacter';
import { createPartyEventHandler } from './events/createParty';
import { escapeMemberEventHandler } from './events/escapeMember';
import { escapePartyEventHandler } from './events/escapeParty';
import { joinPartyEventHandler } from './events/joinParty';
import { openPartyEventHandler } from './events/openParty';
import { rejectVolunteerEventHandler } from './events/rejectVolunteer';
import { replaceMemberEventHandler } from './events/replaceMember';
import { resignMemberEventHandler } from './events/resignMember';
import { selectCharacterEventHandler } from './events/selectCharacter';
import { updateCharacterEventHandler } from './events/updateCharacter';
import { updatePartyInfoEventHandler } from './events/updatePartyInfo';

export const setEventHandlers = states => {
  const eventHandlers = [
    connectEventHandler(states),
    acceptVolunteerEventHandler(states),
    addCharacterEventHandler(states),
    addVolunteerEventHandler(states),
    breakPartyEventHandler(states),
    cancelVolunteerEventHandler(states),
    chatEventHandler(states),
    closePartyEventHandler(states),
    createCharacterEventHandler(states),
    createPartyEventHandler(states),
    escapeMemberEventHandler(states),
    escapePartyEventHandler(states),
    joinPartyEventHandler(states),
    openPartyEventHandler(states),
    rejectVolunteerEventHandler(states),
    replaceMemberEventHandler(states),
    resignMemberEventHandler(states),
    selectCharacterEventHandler(states),
    updateCharacterEventHandler(states),
    updatePartyInfoEventHandler(states),
  ];
  return eventHandlers;
};
