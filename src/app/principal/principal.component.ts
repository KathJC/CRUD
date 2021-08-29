import { estudiante } from './../entidades/estudiantes';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario:estudiante = {} as estudiante;
  usuarios:any;

  
 /* id: string | null;
  
  registro = 'Agregar Estudiante';*/



  constructor(
    private http: HttpClient,
              private aRoute: ActivatedRoute,
              private router: Router,  private toastr: ToastrService
  ) {
  /*  this.id = this.aRoute.snapshot.paramMap.get('id');*/
  }


  enviarPos():void {
    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    .subscribe(Response => {
      console.log(Response);
      this.toastr.success('El estudiante fue registrado con exito', 'Estudiante registrado',{
        positionClass:'toast-bottom-right'
      });
      this.usuario = {} as estudiante;
      this.router.navigate(['/list-estudiante']).catch(error =>{
        console.log(error);
      });

    })
  }


  

  //obtener1
  getUno(id:number):void{
    this.http.get("ttps://frozen-meadow-48728.herokuapp.com/uno/"+id)
  }

  //editar
  editar(id:number){
    this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+id)
    .subscribe(
      response => {
        this.usuario=response;
      },
      error => {
        console.log(error);
      });
  }

  eliminar(id:number): void {
    if (confirm('¿Estas seguro de eliminar este estudiante?')) {
      this.http.delete<estudiante>('https://frozen-meadow-48728.herokuapp.com/eliminar/' + id)
      .subscribe(
        response => {
         alert('Estudiante eliminado');
         window.location.reload();
        },
        error => {
          console.log(error);
        });

      }
    
  
   /*  editarRegistro() : void{
    
        if (this.id === null) {
          this.registro = 'Agregar Estudiante'
        } else {
          this.registro= 'Editar Estudiante'
        }
        this.http.get<estudiante>("https://frozen-meadow-48728.herokuapp.com/uno/"+this.id)
        .subscribe(
          response => {
            this.usuario=response;
          },
          error => {
            console.log(error);
          });*/
    
      }

 
      ngOnInit(): void {
    
        /*this.editarRegistro();*/
      }
    
    }

    
    