import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aguirre-login',
  templateUrl: './aguirre-login.component.html',
  styleUrls: ['./aguirre-login.component.css']
})
export class AguirreLoginComponent {
  constructor(private router: Router) {
  }

 alert: boolean = false;

 datos = {
   usuario: 'admin',
   clave: 'admin'
 }
 
 usuarioLogin = new FormGroup({
   usuario: new FormControl('',Validators.required),
   password: new FormControl('', Validators.required)
 })

 onSubmit(){

   if (this.usuarioLogin.value.usuario==this.datos.usuario && this.usuarioLogin.value.password==this.datos.clave)
   {      
     this.router.navigate(['/cliente']);      
   }
   else
   {
     this.alert = true;      
     setTimeout(() => this.alert=false, 4000);      
   }


 }

 inicio(){
   this.router.navigate(['']);
 }
}
