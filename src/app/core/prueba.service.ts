import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  constructor(private http: HttpClient) {}

  prueba() {
    return this.http.get(
      'http://172.19.45.64:442/itaca/dev/literals/literals/v1.2/getLiterals?dataName=SEG_USU_ESTADO&languageCountryCode=es_ES',
      httpOptions
    );
  }
}
