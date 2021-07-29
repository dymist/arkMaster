import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SceneSelectorComponent } from './scene-selector/scene-selector.component';
import { EventSelectorComponent } from './event-selector/event-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneSelectorComponent,
    EventSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
