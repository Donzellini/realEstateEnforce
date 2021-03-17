import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.scss']
})
export class ImovelComponent implements OnInit {
  imoveis:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getImmobile().subscribe((data)=>{
      console.log(data);
      this.imoveis = data;
      console.log(this.imoveis[0])
    })
  }
  

}
