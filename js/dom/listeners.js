import { state } from "../data/state.js";
import { app, signUpFormCandidate } from "./elements.js";
import { renderSignUpCompany, renderSignUpCandidate, renderChoseTypeCustomer } from "./renders/renderSignUp.js";
import { renderLogin } from "./renders/renderLogin.js";
import { renderCompanyDashboard, renderCompProfile, renderCreateOffer } from "./renders/renderCompDash.js"
import { validateCandidateSignUp, validateCandidateLogin } from "../validators/validatorCandidates.js";
import { validateCompanySignUp, validateCompanyLogin } from "../validators/validatorCompanies.js";
import { createCandidate, updateCandidate } from "../services/servicesCandidates.js";
import { createCompany, updateCompany } from "../services/servicesCompanies.js";
import { Candidate } from "../models/candidate.js";
import { Company } from "../models/company.js";


export function listeners(){

    // Click buttons
    document.addEventListener("click", e => {
        if(e.target.id === "btnSignUp"){
            renderChoseTypeCustomer();
        }
        if(e.target.id === "goBack"){
            renderLogin();
        }
        if(e.target.id === "goToLoginCompany"){
            renderSignUpCompany();
        }
        if(e.target.id === "goToLoginCandidate"){
            renderSignUpCandidate();
        }
        if (e.target.id === "btnLogout") {
            state.currentUser = null
            renderLogin()
        }
    });




    //Register Candidates and Companies
    document.addEventListener("submit", e => {
        if(e.target.id === "signUpFormCandidate"){
            e.preventDefault();
            const name = document.querySelector("#namesCandSignUp").value;
            const lastName = document.querySelector("#lastNameCandSignUp").value;
            const personalID = document.querySelector("#idCandSignUp").value;
            const email = document.querySelector("#emailCandSignUp").value;
            const password = document.querySelector("#passwordCandSignUp").value;
            const confirmPassword = document.querySelector("#confirmPasswordCandSignUp").value;
            
            if(validateCandidateSignUp(email,  personalID, password, confirmPassword)){
                
                const candidate = new Candidate(name, lastName, personalID, email, password)
                createCandidate(candidate)
            }
        }

        if(e.target.id === "signUpFormCompany"){
            e.preventDefault();
            const name = document.querySelector("#nameCompSignUp").value;
            const corpId = document.querySelector("#idCompSignUp").value;
            const email = document.querySelector("#emailCompSignUp").value;
            const password = document.querySelector("#passwordCompSignUp").value;
            const confirmPassword = document.querySelector("#confirmPasswordCompSignUp").value;
            
            if(validateCompanySignUp(email,  corpId, password, confirmPassword)){
                
                const company = new Company(name, corpId, email, password)
                createCompany(company)
            }
        }
    });

    //Login Candidates and Companies

    document.addEventListener("submit", e => {
        if(e.target.id === "loginForm"){
            e.preventDefault();
            const emailLogin = document.querySelector("#emailLogin").value;
            const passwordLogin = document.querySelector("#passwordLogin").value;
            
            const userCompany = validateCompanyLogin(emailLogin, passwordLogin);
            const userCandidate = validateCandidateLogin(emailLogin, passwordLogin)
            
            if(userCompany){
                state.currentUser = userCompany;
                renderCompanyDashboard(state.currentUser);
            }else if(userCandidate){
                state.currentUser = userCandidate;
                console.log("Candidate logged")//renderCandidateDashboard();
            }else{
                alert("Usuario o contraseña incorrecto")
            }

            
        }

    });

    //Aside Dashboard Company
    document.addEventListener("click", e => {

        const main = document.getElementById("main");

        if (e.target.id === "showDashboard") {
            console.log("Click")
        }
        if (e.target.id === "showProfile") {
            renderCompProfile(main)
        }
        if (e.target.id === "showModalCreateOffer") {
            renderCreateOffer(main)
        }

    });


}