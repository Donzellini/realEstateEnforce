import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getBancos(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/bancos`);
  };
  public postBancos(banco:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/bancos`, banco);
  }
  public getAddressClient(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/adress_client`);
  }
  public postAddressClient(clientadress:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/adress_client`, clientadress);
  }

}
