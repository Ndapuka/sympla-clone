import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compoentes/home/navbar/navbar.component';
import { BannerComponent } from './compoentes/home/banner/banner/banner.component';
import { EventoDestaqueComponent } from './compoentes/home/evento-destaque/evento-destaque/evento-destaque.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    EventoDestaqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
