import { renderLogin } from "./dom/render.js";
import { state } from "./data/state.js";
import { listeners } from "./dom/listeners.js";
import { getCompanies } from "./services/servicesCompanies.js";
import { getCandidates } from "./services/servicesCandidates.js";

async function main (){
    renderLogin();
    listeners();
    await getCompanies();
    await getCandidates();
}

main()