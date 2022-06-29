import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SceneSelectorComponent } from './scene-selector/scene-selector.component';
import { EventSelectorComponent } from './event-selector/event-selector.component';
import { ArchiveComponent } from './archive/archive.component';
import { LotoComponent } from './loto/loto.component';
import { CardViewComponent } from './card-view/card-view.component';
import { MythCupComponent } from './myth-cup/myth-cup.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneSelectorComponent,
    EventSelectorComponent,
    ArchiveComponent,
    LotoComponent,
    CardViewComponent,
    MythCupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
