import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    const requestHtml = (request) => {
        // build entire line of list item
        return `<li>${request.address}</li>`
    }

    let html = `
        <ul>
            ${
            requests.map((request) => requestHtml(request))
            }
        </ul>
    `

    return html
}
