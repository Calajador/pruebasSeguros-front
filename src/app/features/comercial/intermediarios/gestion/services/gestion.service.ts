import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Figura } from '../../../interfaces/figura.interface';

@Injectable({
  providedIn: 'root',
})
export class GestionService {
  private URI: string =
    'http://a9d35b7ae696f4f918a4816d0b0851dd-1727866085.eu-west-1.elb.amazonaws.com:1880';
  constructor(private http: HttpClient) {}

  getAllFigure() {
    return this.http.get<Figura[]>(`${this.URI}/figure?state=true`);
  }
}
