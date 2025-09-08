export class UserDataFactory {
  static create(
    id = undefined,
    chooseCharacter = undefined,
    joinedPartyId = undefined,
    volunteerParties = []
  ) {
    return {
      id: id,
      chooseCharacter: chooseCharacter,
      joinedPartyId: joinedPartyId,
      volunteerParties: volunteerParties,
    };
  }
}
