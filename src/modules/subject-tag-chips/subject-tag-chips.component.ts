import { Component, Input, OnInit } from '@angular/core';
import { SubjectTag } from './tag';

@Component({
    selector: 'nie-subject-tag-chips',
    template:
        `<p>{{ indexBasePath }}</p>

<ng-container *ngFor="let t of tags">z</ng-container>        <!--<mat-chip-list>
  <ng-container *ngFor="let t of tags">
    <mat-chip [selectable]="false" [routerLink]="indexBasePath + t.id">
      {{ t.name }} ii
    </mat-chip>
  </ng-container>
</mat-chip-list>-->`
})
export class SubjectTagChipsComponent implements OnInit {

    @Input() indexBasePath: string;
    @Input() tags: Array<SubjectTag>;

    constructor() { }

    ngOnInit() {
    }

}
