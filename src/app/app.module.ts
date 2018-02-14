import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import Electron module
import { NgxElectronModule } from 'ngx-electron';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
