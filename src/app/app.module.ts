import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailedOutputComponent } from './detailed-output/detailed-output.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    SidebarComponent,
    DetailedOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
