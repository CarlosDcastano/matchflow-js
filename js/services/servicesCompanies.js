import { state } from "../data/state.js";

const url = "http://localhost:3000/companies"

export async function getCompanies(){
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("It was not possible to get the candidates")
        }

        const data = await response.json();
        state.companies = data;
    } catch (error) {
        console.log(error)
    }


}

export async function createCompany(objCompany) {
    try {
        const response = await fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(objCompany)
        });

        if(!response.ok){
            throw new Error("It was not possible to create the candidate")
        }

        const newCompany = await response.json();
        state.companies.push(newCompany);

        return newCompany;

    } catch (error) {
        console.log(error)
    }
}

export async function updateCompany(id, editedFields) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method : "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editedFields)
        });

        if(!response.ok){
            throw new error("It was not possible to edit the candidate")
        }

        const editedCompany = await response.json();

        const index = state.tasks.findIndex(c => c.id === id);
        if (index !== -1) {
            state.companies[index] = editedCompany;
        }

        return editedCompany

    } catch (error) {
        console.log(error)
    }
}