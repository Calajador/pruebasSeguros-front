import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Figura } from '../../interfaces/figura.interface';

@Injectable({
  providedIn: 'root',
})
export class FigurasService {
  private URI: string =
    'http://a9d35b7ae696f4f918a4816d0b0851dd-1727866085.eu-west-1.elb.amazonaws.com:1880';

  constructor(private http: HttpClient) {}

  getFigureQuery(code: string, description: string): Observable<Figura[]> {
    let params = new HttpParams().set('state', 'true');
    if (code) {
      params = params.set('code', code);
    }
    if (description) {
      params = params.set('description', description);
    }
    return this.http.get<Figura[]>(`${this.URI}/figure`, { params: params });
  }

  getAllFigure() {
    return this.http.get<Figura[]>(`${this.URI}/figure?state=true`);
  }

  createFigure(figura: Figura) {
    console.log('createFigure', figura);
  }

  updateFigure(figura: Figura) {
    console.log('updateFigure', figura);
  }
}
