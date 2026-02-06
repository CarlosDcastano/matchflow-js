import { state } from "../data/state.js"

export function validateCandidateSignUp(email,  personalID, password, confirmPassword){
    
    const exists = state.candidates.find(cand => cand.email === email || cand.personalID === personalID);

    if(exists){
        alert("There is already an existing user with that email or personal ID")    
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

export function validateCandidateLogin(email, password){
    
    const candidate = state.candidates.find(cand => cand.email === email && cand.password === password)
    
    if(!candidate){
        return false
    }
    return true
}