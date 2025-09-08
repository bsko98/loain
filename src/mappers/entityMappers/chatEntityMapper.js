export class ChatEntityMapper {
  static toInternal(chat) {
    return {
      senderId: chat.senderId,
      message: chat.message,
      timestamp: chat.timestamp,
    };
  }
}
