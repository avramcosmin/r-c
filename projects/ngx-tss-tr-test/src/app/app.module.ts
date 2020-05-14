import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {CountryReducer, EntityReducer, RegionReducer, RegionsReducer} from './app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {NgxTssTrModule} from '../../../ngx-tss-tr/src/lib/ngx-tss-tr.module';
import {CountryDetailsComponent} from './country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      region: RegionReducer,
      regions: RegionsReducer,
      entities: EntityReducer,
      countries: CountryReducer
    }),
    EffectsModule.forRoot([AppEffects]),
    NgxTssTrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
