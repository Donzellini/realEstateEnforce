import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancosComponent } from './bancos/bancos.component';
import { BancocadastroComponent } from './bancocadastro/bancocadastro.component';
import { EnderecoclienteComponent } from './enderecocliente/enderecocliente.component';

const routes: Routes = [
  {path:'bancos', component: BancosComponent},
  {path:'bancocadastro', component: BancocadastroComponent},
  {path:'adress_client', component: EnderecoclienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
