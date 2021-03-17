import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BancosComponent } from './bancos/bancos.component';
import { BancocadastroComponent } from './bancocadastro/bancocadastro.component';
import { EnderecoclienteComponent } from './enderecocliente/enderecocliente.component';
import { EnderecoclientecadastroComponent } from './enderecoclientecadastro/enderecoclientecadastro.component';
import { EnderecoimovelComponent } from './enderecoimovel/enderecoimovel.component';
import { EnderecoimovelcadastroComponent } from './enderecoimovelcadastro/enderecoimovelcadastro.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientecadastroComponent } from './clientecadastro/clientecadastro.component';
import { FinancingComponent } from './financing/financing.component';
import { FinancingcadastroComponent } from './financingcadastro/financingcadastro.component';
import { ImovelComponent } from './imovel/imovel.component';
import { ImovelcadastroComponent } from './imovelcadastro/imovelcadastro.component';
import { ImoveltipoComponent } from './imoveltipo/imoveltipo.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { ProprietariocadastroComponent } from './proprietariocadastro/proprietariocadastro.component';
import { CompraComponent } from './compra/compra.component';
import { CompracadastroComponent } from './compracadastro/compracadastro.component';
import { CompratipoComponent } from './compratipo/compratipo.component';
import { CompratipocadastroComponent } from './compratipocadastro/compratipocadastro.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VendedorcadastroComponent } from './vendedorcadastro/vendedorcadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    BancosComponent,
    BancocadastroComponent,
    EnderecoclienteComponent,
    EnderecoclientecadastroComponent,
    EnderecoimovelComponent,
    EnderecoimovelcadastroComponent,
    ClienteComponent,
    ClientecadastroComponent,
    FinancingComponent,
    FinancingcadastroComponent,
    ImovelComponent,
    ImoveltipoComponent,
    ProprietarioComponent,
    ProprietariocadastroComponent,
    CompraComponent,
    CompracadastroComponent,
    CompratipoComponent,
    CompratipocadastroComponent,
    VendedorComponent,
    VendedorcadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
