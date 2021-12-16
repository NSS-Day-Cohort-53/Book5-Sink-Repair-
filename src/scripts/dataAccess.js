import  { render }  from "./main.js"

const applicationState = {
    requests: []

}
const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
    // dispatch custom event after POST op has been completed
    // every time state changes, generate new HTML representations of the state
    // Now that new state is generated, store permanently in API, implement the stateChanged custom action again
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
        // main module has to listen for custom event and invoke the render fn to build 
        //a ll the HTML again
}
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
