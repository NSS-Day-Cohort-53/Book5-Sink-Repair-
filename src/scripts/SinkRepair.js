import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"
//import HTML into main mod and interpolate it in the site structure 
export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}