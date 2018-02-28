import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'nie-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  results: any;
  searchTerm: string;
  searchResults: any;

  constructor(private http: HttpClient) { }

  startSearch() {
    console.log('Start Search');
    console.log(this.searchTerm);
    this.http.get('http://raeber.nie-ine.ch:3338/v1/search/' + this.searchTerm + '?searchtype=fulltext')
      .subscribe(data => {
        this.searchResults = data;
        console.log(data);
      });
  }

}
