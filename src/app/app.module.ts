import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GeoService } from './services/geo.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    GeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
