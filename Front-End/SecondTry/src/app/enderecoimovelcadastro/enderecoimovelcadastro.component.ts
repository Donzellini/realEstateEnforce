import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-enderecoimovelcadastro',
  templateUrl: './enderecoimovelcadastro.component.html',
  styleUrls: ['./enderecoimovelcadastro.component.scss']
})
export class EnderecoimovelcadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoEnderecoImovel(id_endereco_imov:string, rua_imov:string, numero_imov:string, apto_imov:string, bloco_imov:string, bairro_imov:string, cep_imov:string, cidade_imov:string, uf_imov:string){
      this.apiService.postAdressImmobile({ "id_endereco_imov":id_endereco_imov, "rua_imov":rua_imov, "numero_imov":numero_imov, "apto_imov":apto_imov, "bloco_imov": bloco_imov, "bairro_imov": bairro_imov, "cep_imov":cep_imov, "cidade_imov":cidade_imov, "uf_imov":uf_imov}).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}

