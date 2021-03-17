import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-clientecadastro',
  templateUrl: './clientecadastro.component.html',
  styleUrls: ['./clientecadastro.component.scss']
})
export class ClientecadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoCliente(id_cli:string, name_cli:string, rg_cli:string, cpf_cli:string, birth_date_cli:string, civil_status_cli:string, email_cli:string, cel_cli:string, id_endereco_cli:string, prof_cli:string){
      this.apiService.postClient({ "id_cli":id_cli, "name_cli":name_cli, "rg_cli":rg_cli, "cpf_cli":cpf_cli, "birth_date_cli": birth_date_cli, "civil_status_cli": civil_status_cli, "email_cli":email_cli, "cel_cli":cel_cli, "id_endereco_cli":id_endereco_cli, "prof_cli":prof_cli}).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}
