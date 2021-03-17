import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-enderecoimovel',
  templateUrl: './enderecoimovel.component.html',
  styleUrls: ['./enderecoimovel.component.scss']
})
export class EnderecoimovelComponent implements OnInit {
  adressesimmobiles:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAdressImmobile().subscribe((data)=>{
      console.log(data);
      this.adressesimmobiles = data;
      console.log(this.adressesimmobiles[0])
    })
  }

}
