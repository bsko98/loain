class CharacterDTO {
    characterId // string
    name // string
    serverName // string
    job // string
    itemLevel // number
    arkPassive // { evolution:number, enlightenment:number, leap:number }
    transcend // { weapon:number, armor:number }
    title // string[]
    card // { name:string, awakening:number }[]
}
class MyDTO {
    stoveId // string
    characters // CharactorDTO[]
}
class PrivateUserDTO {
    joinedPartyId // string|null
    volunteerParties // string[]
    id // string
    chooseCharacter // CharacterDTO|null
}
class PublicUserDTO {
    id // string
    chooseCharacter // CharacterDTO|null
}
class PartyFilterDTO {
    startGate // number
    endGate // number
    startTime // Date
    mastery // number
    itemLevel // number
    lastSupporter // boolean|undefined
    lastDealer // boolean|undefined
    arkPassive  // { evolution:number, enlightenment:number, leap:number }
    transcend // { weapon:number, armor:number }
    title // string|undefined
    card // { name:string, awakening:number }[]
}
class PartyDTO {
    partyId // string
    title // string
    boss // string
    difficulty // number
    partyFilter // PartyFilterDTO
    leader // PublicUserDTO
    partyMembers // <PublicUserDTO|null>[]
    allow // boolean
    volunteers // PublicUserDTO[]
}
class ChatDTO {
    senderId // string
    message // string
    timestamp // Date
}

export { CharacterDTO, MyDTO, PrivateUserDTO, PublicUserDTO, PartyFilterDTO, PartyDTO, ChatDTO }