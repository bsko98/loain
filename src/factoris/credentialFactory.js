
export class CredentialFactory {
    static create(
        accessKey = undefined,
        refreshKey = undefined,
    ) {
        return {
            accessKey: accessKey,
            refreshKey: refreshKey,
        }
    }
}