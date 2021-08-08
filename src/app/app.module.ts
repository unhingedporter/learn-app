import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { TopicCardComponent } from './topic-card/topic-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TileViewComponent } from './tile-view/tile-view.component';
import { FilteredActionDataComponent } from './filtered-action-data/filtered-action-data.component';
import {MatCardModule} from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
@NgModule({
  declarations: [
    AppComponent,
    FilterSectionComponent,
    HeaderSectionComponent,
    FooterSectionComponent,
    TopicCardComponent,
    CardComponent,
    ListViewComponent,
    TileViewComponent,
    FilteredActionDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
