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
    /**
     * 
     * @returns {{ success: boolean, message: string }}
     */
    disconnect() {
        if(!this.socket || !this.socket.connected) {
            return { success: false, message: `연결되지 않은 소켓입니다.` };
        }
        this.socket.disconnect();
        this.socket = null;
        return { success: true, message: `소켓 연결이 해제 되었습니다.` };
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