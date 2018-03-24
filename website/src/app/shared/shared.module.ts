import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { SharedComponent } from './shared.component';

const routes: Routes = [];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
