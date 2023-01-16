import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventoInterface } from '../interfaces/EventoInterface';



@Component({
  selector: 'app-pag-eventos',
  templateUrl: './pag-eventos.component.html',
  styleUrls: ['./pag-eventos.component.css']
})
export class PagEventosComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['titulo', 'descripcion', 'participantes', 'cupos', 'fecha', 'acciones']

  data = [{
    titulo: 'Picnic Retro',
    descripcion: 'EVENTO REPROGRAMADO LOUNGE BOX Sólo se vende mesa completa ',
    participantes: 'JC Producciones',
    cupos: 12,
    fecha: "2022-03-25",
    localidad: "Picnic BOX",
    precio: "$90",
    lugar: "Guayaquil Country Club",
    hora: "21:00:00",
    img: "https://i.imgur.com/SQN8A0H.jpg",
  },
  {
    titulo: 'Fonseca - Quito',
    descripcion: 'EVENTO REPROGRAMADO ',
    participantes: 'Fonseca',
    cupos: 121,
    fecha: "2022-03-25",
    localidad: "Localidad VIP",
    precio: "$212",
    lugar: "Coliseo General Rumiñahui - QUITO",
    hora: "21:00:00",
    img: "https://i.imgur.com/ptldFcz.jpg",
  },
  {
    titulo: 'Santiago Cruz - Sinfonico',
    descripcion: 'Sin novedad',
    participantes: 'Santiago Cruz',
    cupos: 99,
    fecha: "2022-03-25",
    localidad: "Butacas VIP",
    precio: "$90",
    lugar: "Teatro Nacional Del CCE",
    hora: "21:00:00",
    img: "https://i.imgur.com/ftiYfMu.png",
  }
  ];

  clickedRows = new Set<EventoInterface>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<EventoInterface>(this.data as EventoInterface[])
    console.log(this.data);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  openForView(eventoInterface: EventoInterface) {
    this.clickedRows.clear();
    this.clickedRows.add(eventoInterface);
    console.log(eventoInterface.titulo);
  }

  reEvento() {
    this.clickedRows.clear();
  }
}
