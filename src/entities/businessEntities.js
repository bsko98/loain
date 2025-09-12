
/** @class */
class ArkPassive {
    /** @type {number} */  evolution
    /** @type {number} */ enlightenment
    /** @type {number} */ leap
}
/** @class */
class Card {
    /** @type {string} */ name
    /** @type {number} */ awakening
}
/** @class */
class Transcend {
    /** @type {number} */ weapon
    /** @type {number} */ armor
}
/** @class */
class Character {
    /** @type {string} */ characterId
    /** @type {string} */ name
    /** @type {string} */ serverName
    /** @type {string} */ job
    /** @type {string} */ imageUrl
    /** @type {number} */ itemLevel
    /** @type {ArkPassive} */ arkPassive
    /** @type {Transcend} */ transcend
    /** @type {string[]} */ titles
    /** @type {Card[]} */ cards
}
/** @class */
class PartyFilter {
    /** @type {number} */ startGate
    /** @type {number} */ endGate
    /** @type {Date} */ startTime
    /** @type {number} */ mastery
    /** @type {number} */ itemLevel
    /** @type {ArkPassive} */ arkPassive
    /** @type {Transcend} */ transcend
    /** @type {string|null} */ title
    /** @type {Card[]} */ card
    /** @type {boolean|null} */ lastSupporter
    /** @type {boolean|null} */ lastDealer
}
/** @class */
class UserData {
    /** @type {string} */ id
    /** @type {Character|null} */ chooseCharacter
    /** @type {string|null} */ joinedPartyId
    /** @type {string[]} */ volunteerParties
}
/** @class */
class Chat {
    /** @type {string} */ senderId
    /** @type {string} */ message
    /** @type {Date} */ timestamp
}
/** @class */
class Party {
    /** @type {string} */ partyId
    /** @type {string} */ title
    /** @type {string} */ boss
    /** @type {number} */ difficulty
    /** @type {PartyFilter} */ partyFilter
    /** @type {UserData} */ leader
    /** @type {(UserData|null)[]} */ partyMembers
    /** @type {boolean|undefined} */ allow
    /** @type {UserData[]|undefined} */ volunteers
}
/** @class */
class MyData {
    /** @type {number} */ stoveId
    /** @type {Character[]} */ characters
    /** @type {UserData} */ userData
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