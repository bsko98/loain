
export const cancelVolunteerEventHandler = (states) => {
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