import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserCredentialsComponent } from './user-credentials/user-credentials.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCredentialsComponent
],
  imports: [
    BrowserModule, SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
