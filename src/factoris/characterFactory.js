import { ArkPassiveFactory } from "./arkPassiveFactory";
import { TranscendFactory } from "./transcendFactory";

export class PartyFactory {
    static create(
        characterId = undefined,
        name = undefined,
        serverName = undefined,
        job = undefined,
        imageUrl = undefined,
        itemLevel = undefined,
        arkPassive = ArkPassiveFactory.create(),
        transcend = TranscendFactory.create(),
        title = [],
        card =[],
    ) {
        return {
            characterId: characterId,
            name: name,
            serverName: serverName,
            job: job,
            imageUrl: imageUrl,
            itemLevel: itemLevel,
            arkPassive: arkPassive,
            transcend: transcend,
            title: title,
            card: card,
        }
    }
}