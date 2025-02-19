import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) { }
    private urlBase = 'https://localhost:7136/api/Parcel';

    getParcelsGroupedByMonth(): Observable<any> {
        return this.http.get(`${this.urlBase}/parcels-grouped-by-month`);
    }
}
