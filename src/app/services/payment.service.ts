import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';
import { ResponseModel } from 'src/app/models/responseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }
  pay(rental:Rental,amount:Number):Observable<ResponseModel>{
    let path = environment.apiUrl+"rentals/paymentadd";
    rental.returnDate = new Date(2021, 11, 24, 10, 33, 30);
    return this.httpClient.post<ResponseModel>(path,{payment:{amount:amount},rental:rental});
  }
}