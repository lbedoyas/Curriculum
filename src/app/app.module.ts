import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ReflaboralComponent } from './reflaboral/reflaboral.component';
import { RefpersonalComponent } from './refpersonal/refpersonal.component';
import { ContactameComponent } from './contactame/contactame.component';

// Google Maps
import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'quiensoy', component: QuiensoyComponent},
  {path: 'estudio', component: EstudiosComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'reflaboral', component: ReflaboralComponent},
  {path: 'refpersonal', component: RefpersonalComponent},
  {path: 'contactame', component: ContactameComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    QuiensoyComponent,
    EstudiosComponent,
    ExperienciaComponent,
    ReflaboralComponent,
    RefpersonalComponent,
    ContactameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDR1LyysGfjjMpjvk4bKEODeMI4htFH3qw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
