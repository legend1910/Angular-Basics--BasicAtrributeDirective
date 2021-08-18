import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BasicHighlighter } from './basic-directive/basic-directive-highlighter';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,BasicHighlighter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
 
}
