import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vendedorcadastro',
  templateUrl: './vendedorcadastro.component.html',
  styleUrls: ['./vendedorcadastro.component.scss']
})
export class VendedorcadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoVendedor(id_vendedor:string, name_vendedor:string, matricula_vendedor:string, email_vendedor:string, telefone_vendedor:string){
      this.apiService.postSellers({ "id_vendedor":id_vendedor, "name_vendedor":name_vendedor, "matricula_vendedor":matricula_vendedor, "email_vendedor":email_vendedor, "telefone_vendedor": telefone_vendedor}).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}
