import { app, } from "../elements.js";
import { state } from "../../data/state.js";


export function renderCompanyDashboard(){
    app.innerHTML="";

    const dashCompany = document.createElement("section");
    dashCompany.id = "dashCompany";
    dashCompany.innerHTML = `
        <div class="min-h-screen flex">

    <aside
        class="w-[15%] min-h-screen bg-slate-800 text-white flex flex-col py-6"
    >
        <div class="divaside px-6 py-3 cursor-pointer hover:bg-slate-700">
            <p id="showDashboard">Dashboard</p>
        </div>

        <div class="divaside px-6 py-3 cursor-pointer hover:bg-slate-700">
            <p id="showProfile">Profile</p>
        </div>

        <div class="divaside px-6 py-3 cursor-pointer hover:bg-slate-700">
            <p id="showModalCreateOffer">Create offer</p>
        </div>
    </aside>

    <div class="flex flex-col w-[85%]">

        <!-- HEADER -->
        <header
            class="h-12 px-8 flex items-center justify-between border-b border-slate-200"
        >
            <h1 class="text-lg font-semibold">
                Hi ${state.currentUser.name}
            </h1>

            <button
                type="button"
                id="btnLogout"
                class="cursor-pointer bg-slate-800 text-white px-4 py-1.5 rounded-lg hover:bg-slate-700 transition-colors"
            >
                Logout
            </button>
        </header>

        <main
            id="main"
            class="flex-1 p-8 bg-slate-100 overflow-y-auto"
        >
            <h2 class="text-xl font-semibold mb-6">
                Your current offers
            </h2>

            <div id="offers" class="space-y-4">
            </div>
        </main>

    </div>

</div>

    `
    app.appendChild(dashCompany);

        const currentCompOffers = state.offers.filter(offer => offer.idCompany === state.currentUser.id);
        console.log(state.offers);
        console.log(state.currentUser.id)
        const offers = document.getElementById("offers");
        

        currentCompOffers.forEach(offer =>{
            const artEachOffer = document.createElement("article");
            artEachOffer.classList.add("artEachOffer");
            artEachOffer.innerHTML=`
                <h2 class="offerName">${offer.title}</h2>

                <div class="offer-details">
                    <p class="offerCompany"><strong>Company Name:</strong> ${offer.company}</p>
                    <p class="offerModality"><strong>Modality:</strong> ${offer.modality}</p>
                    <div class="description"><strong>Description:</strong> ${offer.description}</div>
                    <p class="offerRequirements"><strong>Requirements:</strong> ${offer.requirements}</p>
                    <p class="offerSalary"><strong>Salary:</strong> ${offer.salary}</p>
                </div>
            `
        
            offers.appendChild(artEachOffer);
        })


}

export function renderCompProfile(container) {
    container.innerHTML = "";
    const profileSection = document.createElement("section")
    profileSection.id = "profileSection"

    profileSection.innerHTML = `
        <div 
            id="companyProfile"
            class="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-slate-200 p-8 space-y-6"
            >

            <!-- Header: Name + Corporate ID -->
            <div class="space-y-1">
                <h2 
                    id="companyName"
                    class="text-2xl font-semibold text-slate-800"
                >
                    Company Name: ${state.currentUser.name}
                </h2>

                <p 
                    id="companyCorporateId"
                    class="text-sm text-slate-500"
                >
                    Company Corporal ID: ${state.currentUser.corpId}
                </p>
            </div>

            <!-- Main description -->
            <div>
                <p 
                    id="companyDescription"
                    class="text-slate-600 leading-relaxed"
                >
                    Company Description: ${state.currentUser.corpId}
                </p>
            </div>

            <!-- Extra section 1 (empty on purpose) -->
            <div 
                id="companyExtraInfoOne"
                class="min-h-[1px]"
            ></div>

            <!-- Extra section 2 (empty on purpose) -->
            <div 
                id="companyExtraInfoTwo"
                class="min-h-[1px]"
            ></div>

            <!-- Actions -->
            <div class="flex justify-end pt-4">
                <button
                    id="editCompanyProfile"
                    class="cursor-pointer bg-slate-800 text-white px-5 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors"
                >
                    Edit profile
                </button>
            </div>
        </div>

    `

    container.appendChild(profileSection);
}

export function renderCreateOffer(container) {
    container.innerHTML = "";
    const createOfferSection = document.createElement("section")
    createOfferSection.id = "createOfferSection"

    createOfferSection.innerHTML =`
        <form
            id="createOfferForm"
            class="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-slate-200 p-8 space-y-6"
            >

            <!-- Title -->
            <div>
                <label
                    for="offerTitle"
                    class="block text-sm font-medium text-slate-700 mb-1"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="offerTitle"
                    name="title"
                    required
                    class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800"
                />
            </div>

            <!-- Modality -->
            <div>
                <label
                    for="offerModality"
                    class="block text-sm font-medium text-slate-700 mb-1"
                >
                    Modality
                </label>
                <select
                    id="offerModality"
                    name="modality"
                    required
                    class="w-full rounded-lg border border-slate-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-slate-800"
                >
                    <option value="">Select a modality</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">On-site</option>
                </select>
            </div>

            <!-- Description -->
            <div>
                <label
                    for="offerDescription"
                    class="block text-sm font-medium text-slate-700 mb-1"
                >
                    Description
                </label>
                <textarea
                    id="offerDescription"
                    name="description"
                    rows="5"
                    required
                    class="w-full rounded-lg border border-slate-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-slate-800"
                ></textarea>
            </div>

            <!-- Requirements -->
            <div>
                <label
                    for="offerRequirements"
                    class="block text-sm font-medium text-slate-700 mb-1"
                >
                    Requirements
                </label>
                <textarea
                    id="offerRequirements"
                    name="requirements"
                    rows="5"
                    required
                    class="w-full rounded-lg border border-slate-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-slate-800"
                ></textarea>
            </div>

            <!-- Salary -->
            <div>
                <label
                    for="offerSalary"
                    class="block text-sm font-medium text-slate-700 mb-1"
                >
                    Salary
                </label>
                <input
                    type="text"
                    id="offerSalary"
                    name="salary"
                    placeholder="e.g. $2,000 - $3,000 USD"
                    class="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800"
                    required
                />
            </div>

            <!-- Submit -->
            <div class="flex justify-end pt-4">
                <button
                    type="submit"
                    class="cursor-pointer bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors"
                >
                    Create
                </button>
            </div>

        </form>

    
    `
    container.appendChild(createOfferSection);
}