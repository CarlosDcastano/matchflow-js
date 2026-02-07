import { state } from "../data/state.js";
export class Offer{
    constructor(title, modality, description, requirements, salary){
        this.idCompany = state.currentUser.id;
        this.title = title;
        this.company = state.currentUser.name;
        this.modality = modality;
        this.description = description;
        this.requirements = requirements;
        this.salary = salary;
    }
}