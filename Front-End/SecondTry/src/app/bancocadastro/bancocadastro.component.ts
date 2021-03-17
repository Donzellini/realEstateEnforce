import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bancocadastro',
  templateUrl: './bancocadastro.component.html',
  styleUrls: ['./bancocadastro.component.scss']
})
export class BancocadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoBanco(id_banco:string, name_banco:string){
      this.apiService.postBancos({ "id_banco":id_banco, "name_banco":name_banco }).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}
