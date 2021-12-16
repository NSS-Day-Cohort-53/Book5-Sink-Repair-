import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"


export const Requests = () => {
    const requestsArray = getRequests()
    const requestHtml = (request) => {
        // build entire line of list item
        return `<li> ${request.address} ${request.description} ${request.budget}${request.date}
        
         

        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
        </li>`

    
    }

    let html = `
        <ul>
            ${
            requestsArray.map((request) => requestHtml(request))}

    </ul>`
    
    return html
}
   



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
// add button for user to click and initiate that process to DELETE request to the API