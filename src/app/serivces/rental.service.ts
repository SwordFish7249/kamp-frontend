import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl ="https://localhost:44338/api/rentals/getrentaldetail"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}