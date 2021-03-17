import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-proprietario',
  templateUrl: './proprietario.component.html',
  styleUrls: ['./proprietario.component.scss']
})
export class ProprietarioComponent implements OnInit {
  proprietarios:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getOwners().subscribe((data)=>{
      console.log(data);
      this.proprietarios = data;
      console.log(this.proprietarios[0])
    })
  }
  

}
