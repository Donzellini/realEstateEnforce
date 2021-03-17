import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  compras:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPayment().subscribe((data)=>{
      console.log(data);
      this.compras = data;
      console.log(this.compras[0])
    })
  }
  

}
