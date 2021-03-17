import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.scss']
})
export class BancosComponent implements OnInit {
  bancos:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBancos().subscribe((data)=>{
      console.log(data);
      this.bancos = data;
      console.log(this.bancos[0])
    })
  }

}
