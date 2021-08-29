import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { estudiante } from 'src/app/entidades/estudiantes';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css']
})
export class RegistroEstudianteComponent implements OnInit {

  usuario:estudiante = {} as estudiante;
  usuarios:any;


 

  //crearEstudiante: FormGroup;

  id: string | null;
  
  registro = 'Agregar Estudiante';



  constructor(
    private http: HttpClient,
              private aRoute: ActivatedRoute,
              private router: Router,
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  enviarPos():void {

    this.http.post<estudiante>('https://frozen-meadow-48728.herokuapp.com/registrar', this.usuario)
    .subscribe(Response => {
      console.log(Response);
      this.usuario = {} as estudiante;
      this.router.navigate(['/list-estudiante']);
    })
  }

 

 editarRegistro() : void{

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
      });

  }

  ngOnInit(): void {

    this.editarRegistro();
  }


}

