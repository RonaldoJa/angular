import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aguirre-header',
  templateUrl: './aguirre-header.component.html',
  styleUrls: ['./aguirre-header.component.css']
})
export class AguirreHeaderComponent implements OnInit {
  constructor(private router: Router) { }

  openDialogSesion(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
