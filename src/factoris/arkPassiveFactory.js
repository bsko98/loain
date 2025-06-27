
export class ArkPassiveFactory {
    static create(
        evolution = undefined,
        enlightenment = undefined,
        leap = undefined
    ) {
        return {
            evolution: evolution,
            enlightenment: enlightenment,
            leap: leap
        }
    }
}