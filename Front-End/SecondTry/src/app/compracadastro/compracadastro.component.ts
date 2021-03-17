import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compracadastro',
  templateUrl: './compracadastro.component.html',
  styleUrls: ['./compracadastro.component.scss']
})
export class CompracadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovaCompra(id_compra:string, id_vendedor:string, id_cli:string, valor_compra:string, id_tipo_compra:string){
      this.apiService.postPayment({ "id_compra":id_compra, "id_vendedor":id_vendedor, "id_cli":id_cli, "valor_compra":valor_compra, "id_tipo_compra": id_tipo_compra}).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}

