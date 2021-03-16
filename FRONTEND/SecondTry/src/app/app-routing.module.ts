import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancosComponent } from './bancos/bancos.component'

const routes: Routes = [
  {path:'bancos', component: BancosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
