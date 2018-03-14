import { Component } from '@angular/core';

@Component({
    selector: 'cmp-example',
    template: '<span class="txt-blue">example component from nie npm module test2</span>',
    styles: ['.txt-blue{color:#00f}']
})
export class ExampleComponent {

  constructor() { }

}
