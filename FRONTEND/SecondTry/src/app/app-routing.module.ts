import { Component, NgModule } from '@angular/core';
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
import { CompraComponent } from './compra/compra.component';
import { CompracadastroComponent } from './compracadastro/compracadastro.component';
import { CompratipoComponent} from './compratipo/compratipo.component';
import { CompratipocadastroComponent} from './compratipocadastro/compratipocadastro.component';

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
  {path:'vendedorcadastro', component: VendedorcadastroComponent},
  {path:'payment', component: CompraComponent},
  {path:'compracadastro', component: CompracadastroComponent},
  {path:'paymentType', component: CompratipoComponent},
  {path:'tipocompracadastro', component: CompratipocadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
