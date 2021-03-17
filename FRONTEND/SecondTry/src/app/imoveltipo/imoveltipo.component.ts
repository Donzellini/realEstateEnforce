import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-imoveltipo',
  templateUrl: './imoveltipo.component.html',
  styleUrls: ['./imoveltipo.component.scss']
})
export class ImoveltipoComponent implements OnInit {
  tipos:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getImmobileType().subscribe((data)=>{
      console.log(data);
      this.tipos = data;
      console.log(this.tipos[0])
    })
  }

}
