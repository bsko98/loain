import { titleNameData } from "../dataMapTransformer";
import { CardEntityMapper } from "./cardEntityMapper";


export class PartyFilterEntityMapper {
    static toInternal(partyFilter) {
        return {
            startGate: partyFilter.startGate,
            endGate: partyFilter.endGate,
            startTime: partyFilter.startTime,
            startMastery:partyFilter.startMastery,
            endMastery: partyFilter.endMastery,
            itemLevel: partyFilter.itemLevel,
            arkPassive: partyFilter.arkPassive,
            transcend: partyFilter.transcend,
            title: titleNameData.toInternal(partyFilter.title),
            card: partyFilter.card.map((card) => CardEntityMapper.toInternal(card)),
            lastSupporter: partyFilter.lastSupporter,
            lastDealer: partyFilter.lastDealer,
            environment: partyFilter.environment,
        }
    }
}