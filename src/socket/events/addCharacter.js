
export const addCharacterEventHandler = (states) => {
    return {
        name: "",
        handle: (data) => {
            if(data.status === "error") {
                console.log("Error");
                return;
            }
            console.log(`!`)
        }
    }
}