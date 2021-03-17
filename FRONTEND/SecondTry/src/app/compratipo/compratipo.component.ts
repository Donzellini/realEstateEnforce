import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-compratipo',
  templateUrl: './compratipo.component.html',
  styleUrls: ['./compratipo.component.scss']
})
export class CompratipoComponent implements OnInit {
  tipocompras:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPaymentType().subscribe((data)=>{
      console.log(data);
      this.tipocompras = data;
      console.log(this.tipocompras[0])
    })
  }

}