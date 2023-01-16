import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagComunicadosComponen } from './pag-comunicados/pag-comunicados.component';
import { PagEventosComponent } from './pag-eventos/pag-eventos.component';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'comunicado', component:PagComunicadosComponen},
  {path: 'evento', component:PagEventosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'servicios', component:ServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
