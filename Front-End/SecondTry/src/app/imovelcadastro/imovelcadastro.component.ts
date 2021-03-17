import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-imovelcadastro',
  templateUrl: './imovelcadastro.component.html',
  styleUrls: ['./imovelcadastro.component.scss']
})
export class ImovelcadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoImovel(id_imovel:string, id_endereco_imov:string, id_owner:string, id_vendedor:string, id_tipo_imovel:string, id_compra:string){
      this.apiService.postImmobile({ "id_imovel":id_imovel, "id_endereco_imov":id_endereco_imov, "id_owner":id_owner, "id_vendedor":id_vendedor, "id_tipo_imovel": id_tipo_imovel, "id_compra": id_compra}).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}