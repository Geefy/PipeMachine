import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MorseComponent } from './morse/morse.component';
import { MorsePipe } from './morse.pipe';
import { Md5Pipe } from './md5.pipe';
import { Md5Component } from './md5/md5.component';

@NgModule({
  declarations: [
    AppComponent,
    MorseComponent,
    MorsePipe,
    Md5Pipe,
    Md5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
