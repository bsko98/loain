class ArkPassive {
    evolution // number
    enlightenment // number
    leap // number
}
class Card {
    name // string
    awakening // number
}
class Transcend {
    weapon // number
    armor // number
}
class Character {
    characterId // string
    name // string
    serverName // string
    job // string
    imageUrl // string
    itemLevel // number
    arkPassive // ArkPassive
    transcend // Transcend
    title // string[]
    card // Card[]
}
class PartyFilter {
    startGate // number
    endGate // number
    startTime // Date
    mastery // number
    itemLevel // number
    arkPassive // ArkPassive
    transcend // Transcend
    title // string|null
    card // Card[]
    lastSupporter // boolean|null
    lastDealer // boolean|null
}
class UserData {
    id // string
    chooseCharacter // Character|null
    joinedPartyId //? string|null
    volunteerParties //? string[]
}

class Chat {
    timestamp // date
    senderId // string
    message // string
}
class Party {
    partyId // string
    title // string
    boss // string
    difficulty // number
    allow // boolean
    partyFilter // PartyFilter
    leader // UserData
    partyMembers // (UserData|null)[]
    volunteers // UserData[]
}
class MyData {
    stoveId // number
    characters // Character[]
    userData // UserData
}

export {
    ArkPassive,
    Card,
    Transcend,
    Character,
    PartyFilter,
    UserData,
    Chat,
    Party,
    MyData,
}