import { UserDataFactory } from "./userDataFactory";

export class MyDataFactory {
    static create(
            stoveId = undefined,
            characters = [],
            userData = UserDataFactory.create()
        ) {
        return {
            stoveId: stoveId,
            characters: characters,
            userData: userData,
        }
    }
}