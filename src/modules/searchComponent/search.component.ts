import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HighlightSearchTermService } from '../../services/highlightSearchTerm.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'nie-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  results: any;
  searchInput: string;
  searchResults: any;
  searchTermArray: Array<any>;

  constructor(
    private http: HttpClient,
    public highlightService: HighlightSearchTermService,
    private sanitizer: DomSanitizer
  ) { }

  startSearch() {
    this.createSearchTermArray(this.searchInput);
    console.log('Start Search');
    console.log(this.searchInput);
    this.http.get('http://raeber.nie-ine.ch:3338/v1/search/' + this.searchInput + '?searchtype=fulltext')
      .subscribe(data => {
        this.searchResults = data;
        console.log(data);
      });

  }

  createSearchTermArray(searchInput: string) {
    if ( this.searchTermArray === undefined ) {
      this.searchTermArray = [];
    }
    this.searchTermArray[ 0 ] = this.searchInput;
  }

  highlight(textToHighlight: string, searchTermArray: Array<any>):SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.highlightService.highlight(textToHighlight, searchTermArray));
  }

}
