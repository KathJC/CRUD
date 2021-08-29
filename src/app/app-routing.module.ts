import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FondoComponent } from './principal/fondo/fondo.component';
import { ListEstudianteComponent } from './principal/list-estudiante/list-estudiante.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroEstudianteComponent } from './principal/registro-estudiante/registro-estudiante.component';


const routes: Routes = [
{path:'',redirectTo: 'fondo', pathMatch:'full'},
{path:'fondo', component:FondoComponent},
{path: 'principal', component:PrincipalComponent},
{path: 'list-estudiante', component:ListEstudianteComponent},
{path: 'registro-estudiante/:id', component:RegistroEstudianteComponent},
/*{path:'registroE/:id', component: PrincipalComponent},*/
{path:"",redirectTo: 'principal', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


