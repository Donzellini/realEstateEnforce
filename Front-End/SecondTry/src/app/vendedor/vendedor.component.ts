import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {
  vendedores:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getSellers().subscribe((data)=>{
      console.log(data);
      this.vendedores = data;
      console.log(this.vendedores[0])
    })
  }
  

}
