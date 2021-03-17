import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-enderecocliente',
  templateUrl: './enderecocliente.component.html',
  styleUrls: ['./enderecocliente.component.scss']
})
export class EnderecoclienteComponent implements OnInit {
  adressesclients:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAddressClient().subscribe((data)=>{
      console.log(data);
      this.adressesclients = data;
      console.log(this.adressesclients[0])
    })
  }

}
