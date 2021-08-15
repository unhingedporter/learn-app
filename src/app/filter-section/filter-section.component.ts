import { Component, OnInit } from '@angular/core';
import { FilterSectionService } from '../services/filter-section.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss'],
  providers:[FilterSectionService]
})
export class FilterSectionComponent implements OnInit {

  constructor(private filterSectionService:FilterSectionService) { 
    this.filterSectionService = filterSectionService;
  }

  ngOnInit(): void {
    console.log(`${JSON.stringify(this.filterSectionService.getFilterList())}`);
  }

  anagrams(){
    var str = ["RAT", "CAT", "ART", "CAR", "ACR"];
    var hashmap  = new Map();
    for(var iterator = 0; iterator < str.length; iterator++){

      if(typeof(str[iterator] === 'string')){
        var sortedKey = str[iterator].split('').sort().join();
        if(hashmap.has(sortedKey)){
         var elem =  [hashmap.get(sortedKey)];
         elem.push(str[iterator]);
          hashmap.set(sortedKey, elem);
        } else {
          hashmap.set(sortedKey, str[iterator]);
        }
      }
    }

    console.log([...hashmap.entries()]) 



  }

}
