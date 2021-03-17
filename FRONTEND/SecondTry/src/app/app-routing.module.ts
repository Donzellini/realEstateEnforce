import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancosComponent } from './bancos/bancos.component';
import { BancocadastroComponent } from './bancocadastro/bancocadastro.component';
import { EnderecoclienteComponent } from './enderecocliente/enderecocliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientecadastroComponent } from './clientecadastro/clientecadastro.component';
import { EnderecoimovelComponent } from './enderecoimovel/enderecoimovel.component';
import { EnderecoclientecadastroComponent} from './enderecoclientecadastro/enderecoclientecadastro.component';
import { EnderecoimovelcadastroComponent } from './enderecoimovelcadastro/enderecoimovelcadastro.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { ProprietariocadastroComponent } from './proprietariocadastro/proprietariocadastro.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VendedorcadastroComponent } from './vendedorcadastro/vendedorcadastro.component';

const routes: Routes = [
  {path:'bancos', component: BancosComponent},
  {path:'bancocadastro', component: BancocadastroComponent},
  {path:'adress_client', component: EnderecoclienteComponent},
  {path:'clients', component: ClienteComponent},
  {path:'clientecadastro', component: ClientecadastroComponent},
  {path:'adress_immobile', component: EnderecoimovelComponent},
  {path:'enderecoclientecadastro', component: EnderecoclientecadastroComponent},
  {path:'enderecoimovelcadastro', component: EnderecoimovelcadastroComponent},
  {path:'owners', component: ProprietarioComponent},
  {path:'proprietariocadastro', component: ProprietariocadastroComponent},
  {path:'sellers', component: VendedorComponent},
  {path:'vendedorcadastro', component: VendedorcadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
