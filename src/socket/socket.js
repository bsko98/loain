import { io } from "socket.io-client"

class SocketManager {
    socket;
    handlers;
    accessKey;
    constructor() {
        this.accessKey = ``;
    }
    connect(url) {
        if (this.socket === undefined) {
            const accessKey = this.accessKey;
            this.socket = io(`${url}`, {
                auth: {
                    token: accessKey
                },
            });
            this.handlers.forEach(element => {
                this.socket.on(element.name, element.handle);
            });
        }
        return this;
    }
    getSocket() {
        return this.socket;
    }
    setHandlers(handlers) {
        this.handlers = handlers;
        return this;
    }
    setAccessKey(accessKey) {
        this.accessKey = accessKey;
        return this;
    }
    send(eventName, data) {
        this.socket.emit(eventName, data);
        return this;
    }
}

export const socketManager = new SocketManager()