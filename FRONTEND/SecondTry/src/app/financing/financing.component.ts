import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.scss']
})
export class FinancingComponent implements OnInit {
  financiamentos:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFinancing().subscribe((data)=>{
      console.log(data);
      this.financiamentos = data;
      console.log(this.financiamentos[0])
    })
  }
  

}