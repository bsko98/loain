import { io } from "socket.io-client"

class SocketManager {
    socket
    handlers
    connect(address, port) {
        if (this.socket === undefined) {
            this.socket = io(`${address}:${port}`)
            this.handlers.forEach(element => {
                this.socket.on(element.name, element.handle)
            });
        }
        return this
    }
    getSocket() {
        return this.socket
    }
    setHandlers(handlers) {
        this.handlers = handlers
    }
}

export const socketManager = new SocketManager()