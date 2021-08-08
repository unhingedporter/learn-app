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

}
