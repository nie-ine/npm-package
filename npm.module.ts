import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'npm', component: AboutComponent },
    ])
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class NpmModule { }
