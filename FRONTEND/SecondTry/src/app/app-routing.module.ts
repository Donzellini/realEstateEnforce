import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancosComponent } from './bancos/bancos.component';
import { BancocadastroComponent } from './bancocadastro/bancocadastro.component';
import { EnderecoclienteComponent } from './enderecocliente/enderecocliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientecadastroComponent } from './clientecadastro/clientecadastro.component';
import { EnderecoimovelComponent } from './enderecoimovel/enderecoimovel.component';
import { EnderecoclientecadastroComponent} from './enderecoclientecadastro/enderecoclientecadastro.component'

const routes: Routes = [
  {path:'bancos', component: BancosComponent},
  {path:'bancocadastro', component: BancocadastroComponent},
  {path:'adress_client', component: EnderecoclienteComponent},
  {path:'clients', component: ClienteComponent},
  {path:'clientecadastro', component: ClientecadastroComponent},
  {path:'adress_immobile', component: EnderecoimovelComponent},
  {path:'enderecoclientecadastro', component: EnderecoclientecadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
