SubjectTagChipsComponent
========================

Usage:

<app-tag-chips [tags]="tagInput" [indexBasePath]="'/index/'"></app-tag-chips>

Inputs:

indexBasePath: The path to the index where the subject is described.

tags: An array of tag objects. Compare
```
export class SubjectTag {
  id: string;
  iri: string;
  name: string;
```...