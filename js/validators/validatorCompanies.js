import { state } from "../data/state.js"

export function validateCompanySignUp(email,  corpId, password, confirmPassword){
    
    const exists = state.companies.find(comp => comp.email === email || comp.corpId === corpId);

    if(exists){
        alert("There is already an existing company with that email or personal ID")    
        return false
    }

    if(password !== confirmPassword){
        alert("The entered passwords don't match")
        return false
    }

    if (/\s/.test(password) || !password) {
        alert("The password cannot contain spaces.");
        return false
    }

    return true
}

export function validateCompanyLogin(email, password){
    
    const company = state.companies.find(comp => comp.email === email && comp.password === password)
    
    if(!company){
        return false
    }else{
        return true
    }
}