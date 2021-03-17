import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compratipocadastro',
  templateUrl: './compratipocadastro.component.html',
  styleUrls: ['./compratipocadastro.component.scss']
})
export class CompratipocadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoTipoCompra(id_tipo_compra:string, vista:string, id_financiamento:string){
      this.apiService.postBancos({ "id_tipo_compra":id_tipo_compra, "vista":vista, "id_financiamento":id_financiamento }).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}
