import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClienteInterface } from '../interfaces/ClienteInterface';

@Component({
  selector: 'app-aguirre-clientes',
  templateUrl: './aguirre-clientes.component.html',
  styleUrls: ['./aguirre-clientes.component.css']
})
export class AguirreClientesComponent implements OnInit {
  
  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'ciudad']

  data = [{
    cedula: '0151245245',
    nombres: 'Andrés Luis',
    apellidos: 'Carvajal Lozano',
    ciudad: 'Quito, Ecuador'
  },
  {
    cedula: '0954658913',
    nombres: 'Jorge Luis',
    apellidos: 'Charco Aguirre',
    ciudad: 'Guayaquil, Ecuador',
  },
  {
    cedula: '0957962158',
    nombres: 'Andrea Lisbeth',
    apellidos: 'Romero Haro',
    ciudad: 'Guayaquil, Ecuador',
  },
  {
    cedula: '099349832',
    nombres: 'Jose Andres',
    apellidos: 'Pirlo Arjona',
    ciudad: 'Cuenca, Ecuador',
  },
  {
    cedula: '0989349826',
    nombres: 'Maria Isabel',
    apellidos: 'Caicedo Aguilar',
    ciudad: 'Guayaquil, Ecuador',
  }
  ];

  nregistros: String[] = [];



  constructor(private router: Router, private dialog: MatDialog) {

  };

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ClienteInterface>(this.data as ClienteInterface[]);
    console.log(this.data);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value.toLowerCase();
    console.log(filtro);

    for(let i in this.data){
      this.nregistros.push(this.data[i].apellidos.toLowerCase());
    }

    const buscarApellido = (apellido: any) => {
      return this.nregistros.filter(element => {
        if (element.includes(apellido)){
          this.dataSource.filter = filtro.trim().toLowerCase();
        };
      })
    };

    if(buscarApellido(filtro)){
      return true;
    }

    return false;
  }

  salir() {
    this.router.navigate(['login']);
  }
}
