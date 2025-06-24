import { bossNameData } from "../dataMapTransformer";
import { PartyFilterEntityMapper } from "./partyFilterEntityMapper";


export class PartyEntityMapper {
    static toInternal(party) {
        return {
            partyId: party.partyId,
            title: party.title,
            boss: bossNameData.toInternal(party.boss),
            difficulty: party.difficulty,
            partyFilter: PartyFilterEntityMapper.toInternal(party.partyFiltter),
            leader: UserDataEntityMapper.toInternal(party.leader),
            partyMembers: party.partyMembers.map((member) => UserDataEntityMapper.toInternal(member)),
            allow: party.allow,
            volunteers: party.volunteers.map((volunteers) => UserDataEntityMapper.toInternal(volunteers)),
        }
    }
}