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
  public getAdressImmobile(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/adress_immobile`);
  }
  public postAdressImmobile(immobileaddress:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/adress_immobile`, immobileaddress);
  }
  public getClient(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/clients`);
  }
  public postClient(client:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/clients`, client);
  }
  public getFinancing(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/financing`);
  }
  public postFinancing(financing:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/financing`, financing);
  }
  public getImmobile(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/immobile`);
  }
  public postImmobile(immobile:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/immobile`, immobile);
  }
  public getImmobileType(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/immobileTypes`);
  }
  public postImmobileType(immobiletype:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/immobileTypes`, immobiletype);
  }
  public getOwners(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/owners`);
  }
  public postOwners(owner:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/owners`, owner);
  }
  public getPayment(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/payment`);
  }
  public postPayment(payment:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/payment`, payment);
  }
  public getPaymentType(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/paymentType`);
  }
  public postPaymentType(paymenttype:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/paymentType`, paymenttype);
  }
  public getSellers(){
    return this.httpClient.get(`http://127.0.0.1:5000/api/sellers`);
  }
  public postSellers(sellers:any){
    return this.httpClient.post(`http://127.0.0.1:5000/api/sellers`, sellers);
  }

}
