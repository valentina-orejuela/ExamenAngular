import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'pagina-principal', pathMatch: 'full'
  },
  {
    path: 'pagina-principal', component: PaginaPrincipalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
