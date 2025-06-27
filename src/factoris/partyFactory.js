
export class PartyFactory {
    static create(
        partyId = undefined,
        title = undefined,
        boss = undefined,
        difficulty = undefined,
        allow = undefined,
        partyFilter = undefined,
        leader = undefined,
        partyMembers = [],
        volunteers = []
    ) {
        return {
            partyId: partyId,
            title: title,
            boss: boss,
            difficulty: difficulty,
            allow: allow,
            partyFilter: partyFilter,
            leader: leader,
            partyMembers: partyMembers,
            volunteers: volunteers,
        }
    }
}