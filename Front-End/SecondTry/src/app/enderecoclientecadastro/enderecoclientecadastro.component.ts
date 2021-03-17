import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-enderecoclientecadastro',
  templateUrl: './enderecoclientecadastro.component.html',
  styleUrls: ['./enderecoclientecadastro.component.scss']
})
export class EnderecoclientecadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoEnderecoCliente(id_endereco_cli:string, rua_cli:string, numero_cli:string, apto_cli:string, bloco_cli:string, bairro_cli:string, cep_cli:string, cidade_cli:string, uf_cli:string){
      this.apiService.postAddressClient({ "id_endereco_cli":id_endereco_cli, "rua_cli":rua_cli, "numero_cli":numero_cli, "apto_cli":apto_cli, "bloco_cli": bloco_cli, "bairro_cli": bairro_cli, "cep_cli":cep_cli, "cidade_cli":cidade_cli, "uf_cli":uf_cli}).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}
