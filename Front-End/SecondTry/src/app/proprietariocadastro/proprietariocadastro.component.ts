import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-proprietariocadastro',
  templateUrl: './proprietariocadastro.component.html',
  styleUrls: ['./proprietariocadastro.component.scss']
})
export class ProprietariocadastroComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void { 
  }

  insereNovoProprietario(id_owner:string, name_owner:string, rg_owner:string, cpf_owner:string, birth_date_owner:string, civil_status_owner:string, email_owner:string, cel_owner:string, prof_owner:string, tempo_prop:string){
      this.apiService.postOwners({ "id_owner":id_owner, "name_owner":name_owner, "rg_owner":rg_owner, "cpf_owner":cpf_owner, "birth_date_owner": birth_date_owner, "civil_status_owner": civil_status_owner, "email_owner":email_owner, "prof_owner":prof_owner, "cel_owner":cel_owner, "tempo_prop":tempo_prop}).subscribe((data) => {
        console.log(data)
      },
      error  => {
      console.log("Error", error);
      });
  }
}