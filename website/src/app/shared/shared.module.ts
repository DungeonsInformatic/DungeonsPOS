import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule, Routes } from '@angular/router';
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
