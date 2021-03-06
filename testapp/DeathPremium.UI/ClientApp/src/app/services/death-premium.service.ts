import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { OccupationRatingModel } from '../models/occupation-rating.model';
import { DeathPremiumModel } from '../models/death-premium.model';
import { DeathPremiumAmountModel } from '../models/deathpremium-amount.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeathPremiumService  {

  private apiUrl = environment.apiEndpoint + "api/DeathPremiumCalc";
  constructor(private http: HttpClient) { }

  // Get Occupation list from API
  public GetOccupationList() {
   return this.http.get<OccupationRatingModel[]>(this.apiUrl, { observe: 'response' }).pipe(tap(data => data),
      catchError(this.handleError)
    );

  }
 // Get calculated death premium amount from API
  public GetDeathPremiumamount(amountModel: DeathPremiumModel) {
    var body = JSON.stringify(amountModel);
    var headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<DeathPremiumAmountModel[]>(this.apiUrl,  body, {headers: headerOptions}
    ).pipe(catchError(this.handleError.bind(this)));

  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
}
