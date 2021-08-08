import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterSectionService {

  
  constructor() { }

  getFilterList(){
    return {
      Roles:[        "FrontEnd","BackEnd", "FullStack" ],
      Topics:["Array", "LinkedList", "Hashing", "Trees", "Graphs"]
    }
  }
}
