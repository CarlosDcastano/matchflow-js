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
                <!-- Offers go here -->
            </div>
        </main>

    </div>

</div>

    `
    app.appendChild(dashCompany)
}

export function showProfile(container) {
    container.innerHTML = "";
    const profileSection = document.createElement("section")
    profileSection.id = "profileSection"

    const dataProfile = 

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