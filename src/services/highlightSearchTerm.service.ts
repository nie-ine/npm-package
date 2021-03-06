import { Injectable } from '@angular/core';


@Injectable()
export class HighlightSearchTermService {

  constructor() {}

  j: number;

  /**
   * Calculates the sum.
   * @param addends Numbers to be added
   */
  public highlight(textToHighlight: string, searchTermArray: Array<string>) {
    if (searchTermArray === undefined) {
      return textToHighlight;
    }
    this.j = 0;
    for (let searchTerm of searchTermArray) {
      textToHighlight = this.highlightSingleSearchTerm(textToHighlight, searchTerm, this.j);
      this.j += 1;
    }
    return textToHighlight;
  }

  highlightSingleSearchTerm(textToHighlight: string, searchTerm: string, j: number): string {
    if (searchTerm === undefined) {
      return textToHighlight;
    } else if (textToHighlight !== undefined) {
      if (j === 0) {
        return textToHighlight.replace(new RegExp(searchTerm, 'gi'), match => {
          return '<span style="background: #fffe9f;">' + match + '</span>';
        });
      } else if (j === 1) {
        return textToHighlight.replace(new RegExp(searchTerm, 'gi'), match => {
          return '<span style="background: #a6ffc3;">' + match + '</span>';
        });
      } else if (j === 2) {
        return textToHighlight.replace(new RegExp(searchTerm, 'gi'), match => {
          return '<span style="background: #ffb49b;">' + match + '</span>';
        });
      } else if (j === 3) {
        return textToHighlight.replace(new RegExp(searchTerm, 'gi'), match => {
          return '<span style="background: #c3bfff;">' + match + '</span>';
        });
      } else {
        return textToHighlight.replace(new RegExp(searchTerm, 'gi'), match => {
          return '<span style="background: #fffe9f;">' + match + '</span>';
        });
      }
    } else {
        return textToHighlight;
    }
  }
}
