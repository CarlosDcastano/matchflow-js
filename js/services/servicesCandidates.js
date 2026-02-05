import { state } from "../data/state.js";

const url = "http://localhost:3000/canditdates"

export async function getCandidates(){
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("It was not possible to get the candidates")
        }

        const data = await response.json();
        state.candidates = data;
    } catch (error) {
        console.log(error)
    }


}

export async function createCandidate(objCantidate) {
    try {
        const response = await fetch(url, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(objCantidate)
        });

        if(!response.ok){
            throw new Error("It was not possible to create the candidate")
        }

        const newCandidate = await response.json();
        state.candidates.push(newCandidate);

        return newCandidate;

    } catch (error) {
        console.log(error)
    }
}

export async function updateCandidate(id, editedFields) {
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

        const editedCandidate = await response.json();

        const index = state.tasks.findIndex(c => c.id === id);
        if (index !== -1) {
            state.candidates[index] = editedCandidate;
        }

        return editedCandidate

    } catch (error) {
        console.log(error)
    }
}