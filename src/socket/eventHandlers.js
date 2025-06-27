import { connectEventHandler } from "./events/connect"

export const setEventHandlers = (states) => {
    const eventHandlers = [
        connectEventHandler(states),
    ]
    return eventHandlers
}