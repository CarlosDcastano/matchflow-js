import { state } from "../data/state.js";
import { app } from "./elements.js";
import { renderLogin, renderSignUpCompany, renderSignUpCandidate, renderChoseTypeCustomer } from "./render.js";

export function listeners(){

    //login
    document.addEventListener("click", e => {
        if(e.target.id === "btnSignUp"){
            renderChoseTypeCustomer();
        }
    });

    //Register
    document.addEventListener("click", e => {
        if(e.target.id === "login"){
            renderLogin();
        }
    });

    //Create candidate


    //Create company




}