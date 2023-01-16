import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagComunicadosComponent } from './pag-comunicados/pag-comunicados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PiePaginaComponent,
    HomeComponent,
    LoginComponent,
    PagComunicadosComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, 
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
