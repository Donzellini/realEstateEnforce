import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-imoveltipocadastro',
  templateUrl: './imoveltipocadastro.component.html',
  styleUrls: ['./imoveltipocadastro.component.scss']
})
export class ImoveltipocadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoTipoImovel(id_tipo_imovel:string, tipo_imovel:string){
      this.apiService.postImmobileType({ "id_tipo_imovel":id_tipo_imovel, "tipo_imovel":tipo_imovel }).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}
