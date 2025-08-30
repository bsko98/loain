import { bossNameData } from "../dataMapTransformer";
import { PartyFilterEntityMapper } from "./partyFilterEntityMapper";
import {UserDataEntityMapper} from "./userDataEntityMapper"

export class PartyEntityMapper {
    static toInternal(party) {
        return {
            partyId: party.partyId,
            title: party.title,
            boss: bossNameData.toInternal(party.boss),
            difficulty: party.difficulty,
            partyFilter: PartyFilterEntityMapper.toInternal(party.partyFilter),
            leader: UserDataEntityMapper.toInternal(party.leader),
            partyMembers: party.partyMembers.map((member) => {return (member === null)?null:UserDataEntityMapper.toInternal(member)}),
            allow: party.allow,
            volunteers: party.volunteers.map((volunteers) => UserDataEntityMapper.toInternal(volunteers)),
        }
    }
}