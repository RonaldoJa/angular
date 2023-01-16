import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { PageInicialComponent } from './aguirre-page-inicial/page-inicial.component';
import { AguirreClientesComponent } from './aguirre-clientes/aguirre-clientes.component';
import { AguirreLoginComponent } from "./aguirre-login/aguirre-login.component";
import { AguirreHeaderComponent } from './aguirre-header/aguirre-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInicialComponent,
    AguirreClientesComponent,
    AguirreLoginComponent,
    AguirreHeaderComponent,
  ],
  imports: [
    BrowserModule, AppRouterModule, BrowserAnimationsModule, 
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  entryComponents: [AguirreLoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
