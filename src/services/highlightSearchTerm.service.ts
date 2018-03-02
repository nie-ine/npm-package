import { Injectable } from '@angular/core';

@Injectable()
export class HighlightSearchTermService {

  j: number;

  /**
   * Calculates the sum.
   * @param addends Numbers to be added
   */
  public highlight(textToHighlight: string, searchTermArray: Array<string>) {
    console.log('Highlight');
    //console.log(textToHighlight);
    //console.log(searchTermArray);
    if (searchTermArray === undefined) {
      return textToHighlight;
    }
    this.j = 0;
    for (let seachTerm of searchTermArray) {
      textToHighlight = this.highlightSingleSearchTerm(textToHighlight, seachTerm, this.j);
      this.j += 1;
    }
    return textToHighlight;
  }

  highlightSingleSearchTerm(textToHighlight: string, searchTerm: string, j: number) {
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
      return null;
    }
  }
}
