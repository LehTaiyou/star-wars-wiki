import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFilms } from "../model/films";

@Injectable() export class StarWarsService{
    baseUrl = "https://swapi.dev/api/"
    
    constructor (private Http:HttpClient) {

    }
    
    get(url:string){
        return this.Http.get<any>(url)
    }
    getFilms(id:string){
        return this.Http.get<IFilms>(`${this.baseUrl}/films/${id}/`);
    }
    getPlanets(){
        return this.Http.get<any>(`${this.baseUrl}/planets/`);
    }
    getPlanetsById(id:string){
        return this.Http.get<any>(`${this.baseUrl}/planets/${id}/`);
    }
    getCharacters(){
        return this.Http.get<any>(`${this.baseUrl}/people/`);
    }
    getCharactersById(id:string){
        return this.Http.get<any>(`${this.baseUrl}/people/${id}/`);
    }
    getSpecies(){
        return this.Http.get<any>(`${this.baseUrl}/species/`);
    }
    getSpeciesById(id:string){
        return this.Http.get<any>(`${this.baseUrl}/species/${id}/`);
    }
    getVehicles(){
        return this.Http.get<any>(`${this.baseUrl}/vehicles/`);
    }
    getVehiclesById(id:string){
        return this.Http.get<any>(`${this.baseUrl}/vehicles/${id}/`);
    }
    getStarships(){
        return this.Http.get<any>(`${this.baseUrl}/starships/`);
    }
    getStarshipsById(id:string){
        return this.Http.get<any>(`${this.baseUrl}/starships/${id}/`);
    }
    getByEndPoint(endpoint:string){
        return this.Http.get<any>(endpoint)
    }
}