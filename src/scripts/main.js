import { fetchRequests } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

// fetch data from the API and store it in app state before converting data structures to HTML reps

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    })



    