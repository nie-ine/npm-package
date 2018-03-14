import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HighlightSearchTermService } from '../../services/highlightSearchTerm.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'nie-search',
    template: '<div class="container"><mat-form-field><input matInput type="text" placeholder="Suche" [(ngModel)]="searchInput"> <button mat-button matSuffix mat-icon-button (click)="startSearch()"><mat-icon>forward</mat-icon></button></mat-form-field><div *ngIf="searchResults"><div *ngFor="let result of searchResults.subjects; let i = index;"><br>{{ i }}<div [innerHTML]="highlight(result.value[1], searchTermArray)" ></div></div></div></div>',
    styles: ['.container{width:300px;overflow:auto;height:500px}']
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
