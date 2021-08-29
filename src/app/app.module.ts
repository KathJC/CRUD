import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';


import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './principal/navbar/navbar.component';
import { ListEstudianteComponent } from './principal/list-estudiante/list-estudiante.component';
import { RegistroEstudianteComponent } from './principal/registro-estudiante/registro-estudiante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FondoComponent } from './principal/fondo/fondo.component';



@NgModule({
  
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    ListEstudianteComponent,
    RegistroEstudianteComponent,
    FondoComponent,

  ],

  imports: [
    BrowserModule,
    MatTableModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
