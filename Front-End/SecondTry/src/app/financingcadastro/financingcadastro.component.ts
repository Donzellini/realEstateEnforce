import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-financingcadastro',
  templateUrl: './financingcadastro.component.html',
  styleUrls: ['./financingcadastro.component.scss']
})
export class FinancingcadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoFinanciamento(id_financiamento:string, id_cli:string, id_banco:string, entrada:string, num_parcela:string){
      this.apiService.postFinancing({ "id_financiamento":id_financiamento, "id_cli":id_cli, "id_banco":id_banco, "entrada":entrada, "num_parcela": num_parcela}).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}
