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
import { FinancingComponent } from './financing/financing.component';
import { FinancingcadastroComponent } from './financingcadastro/financingcadastro.component';
import { ImoveltipoComponent } from './imoveltipo/imoveltipo.component';
import { ImoveltipocadastroComponent} from './imoveltipocadastro/imoveltipocadastro.component';
import { ImovelComponent } from './imovel/imovel.component';
import { ImovelcadastroComponent } from './imovelcadastro/imovelcadastro.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
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
  {path:'tipocompracadastro', component: CompratipocadastroComponent},
  {path:'financing', component: FinancingComponent},
  {path:'financiamentocadastro', component: FinancingcadastroComponent},
  {path: 'immobileTypes', component: ImoveltipoComponent},
  {path: 'tipoimovelcadastro', component: ImoveltipocadastroComponent},
  {path: 'immobile', component: ImovelComponent},
  {path: 'imovelcadastro', component: ImovelcadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
