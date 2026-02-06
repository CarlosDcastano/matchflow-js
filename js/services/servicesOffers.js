import { state } from "../data/state.js";

const url = "http://localhost:3000/offers"

export async function getOffers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
                throw new Error("It was not possible to get the offers");
            }
        
        const data = await response.json()
        state.offers = data
    } catch (error) {
        console.log(error)
    }
}

export async function createOffer(objOffer){
    try {
        const response = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(objOffer)
        });
        if (!response.ok) {
            throw new Error("It was not possible to create the offer");
        }

        const newOffer = await response.json();
        state.offers.push(newOffer);

        return newOffer;

    } catch (error) {
        console.log(error)
    }
}

export async function updateOffer(id, editedFields) {
    try {
        const response = await fetch(`${url}/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(editedFields)
        });

        if (!response.ok) {
            throw new Error("It was not possible to edit");
        }

        const editedOffer = await response.json();

        const index = state.tasks.findIndex(c => c.id === id);
        if (index !== -1) {
            state.offers[index] = editedOffer;
        }

        return editedOffer
    } catch (error) {
        console.log(error)
    }
    
}

export async function deleteOffer(id) {
    try {
        const response = await fetch(`${url}/${id}`,{
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("It was not possible to delete the offer");
        }

        state.offers = state.offers.filter(of => of.id !== id);

    } catch (error) {
        console.log(error)
    }
}