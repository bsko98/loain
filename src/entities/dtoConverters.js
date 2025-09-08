import {
  bossNameData,
  classNameData,
  titleNameData,
  cardNameData,
  serverNameData,
} from '../mappers/dataMapTransformer';

export const characterDTOconverter = characterDTOData => {
  return {
    characterId: characterDTOData.characterId,
    name: characterDTOData.name,
    serverName: serverNameData.toInternal(characterDTOData.serverName),
    job: classNameData.toInternal(characterDTOData.job),
    imageUrl: characterDTOData.imageUrl,
    itemLevel: characterDTOData.itemLevel,
    arkPassive: characterDTOData.arkPassive,
    transcend: characterDTOData.transcend,
    titles: characterDTOData.title.map(titleNameData.toInternal),
    cards: characterDTOData.card.map(card => {
      return {
        name: cardNameData.toInternal(card.name),
        awakening: card.awakening,
      };
    }),
  };
};
export const myDTOconverter = myDTOData => {
  return {
    stoveId: myDTOData.stoveId,
    characters: myDTOData.characters.map(characterDTOconverter),
    userData: undefined,
  };
};
export const privateUserDTOconverter = privateUserDTOData => {
  return {
    id: privateUserDTOData.id,
    chooseCharacter: characterDTOconverter(privateUserDTOData.chooseCharacter),
    joinedPartyId: privateUserDTOData.joinedPartyId,
    volunteerParties: privateUserDTOData.volunteerParties,
  };
};
export const publicUserDTOconverter = publicUserDTOData => {
  return {
    id: publicUserDTOData.id,
    chooseCharacter: characterDTOconverter(publicUserDTOData.chooseCharacter),
    joinedPartyId: undefined,
    volunteerParties: undefined,
  };
};
export const partyFilterDTOconverter = partyFilterDTOData => {
  return {
    startGate: partyFilterDTOData.startGate,
    endGate: partyFilterDTOData.endGate,
    startTime: partyFilterDTOData.startTime,
    mastery: partyFilterDTOData.mastery,
    itemLevel: partyFilterDTOData.itemLevel,
    arkPassive: partyFilterDTOData.arkPassive,
    transcend: partyFilterDTOData.transcend,
    title: titleNameData.toInternal(partyFilterDTOData.title),
    card: partyFilterDTOData.card.map(card => {
      return {
        name: cardNameData.toInternal(card.name),
        awakening: card.awakening,
      };
    }),
    lastSupporter: partyFilterDTOData.lastSupporter,
    lastDealer: partyFilterDTOData.lastDealer,
  };
};
export const partyDTOconverter = partyDTOData => {
  return {
    partyId: partyDTOData.partyId,
    title: partyDTOData.title,
    boss: bossNameData.toInternal(partyDTOData.boss),
    difficulty: partyDTOData.difficulty,
    partyFilter: partyFilterDTOconverter(partyDTOData.partyFilter),
    leader: publicUserDTOconverter(partyDTOData.leader),
    partyMembers: partyDTOData.partyMembers.map(member =>
      member ? publicUserDTOconverter(member) : null
    ),
    allow: partyDTOData?.allow,
    volunteers: partyDTOData?.volunteers
      ? partyDTOData.volunteers.map(publicUserDTOconverter)
      : undefined,
  };
};
