export class ChatFactory {
  static create(
    timestamp = undefined,
    senderId = undefined,
    message = undefined
  ) {
    return {
      timestamp: timestamp,
      senderId: senderId,
      message: message,
    };
  }
}
