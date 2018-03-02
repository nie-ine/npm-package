import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HighlightSearchTermService } from '../../services/highlightSearchTerm.service';

@Component({
    selector: 'nie-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  results: any;
  searchTerm: string;
  searchResults: any;
  searchTermArray: Array<any>;

  constructor(
    private http: HttpClient,
    public highlightService: HighlightSearchTermService
  ) { }

  startSearch() {
    console.log('Start Search');
    console.log(this.searchTerm);
    this.http.get('http://raeber.nie-ine.ch:3338/v1/search/' + this.searchTerm + '?searchtype=fulltext')
      .subscribe(data => {
        this.searchResults = data;
        console.log(data);
      });
    this.highlightService.highlight('searchTerm', this.searchTermArray);
  }

}
