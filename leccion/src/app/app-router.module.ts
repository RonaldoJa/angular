import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AguirreClientesComponent } from "./aguirre-clientes/aguirre-clientes.component";
import { AguirreLoginComponent } from "./aguirre-login/aguirre-login.component";
import { PageInicialComponent } from "./aguirre-page-inicial/page-inicial.component";

//route
const routes:Routes=[
    {path:'',component:PageInicialComponent},
    {path:'pageInicial',component:PageInicialComponent},
    {path:'cliente',component:AguirreClientesComponent},
    {path:'login', component:AguirreLoginComponent},

    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
})

export class AppRouterModule{}