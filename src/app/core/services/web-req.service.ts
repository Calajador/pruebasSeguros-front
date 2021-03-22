import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../API/Constants';

@Injectable({
  providedIn: 'root',
})
export class WebReqService {
  constructor(private http: HttpClient) {}

  get(uri: string) {
    return this.http.get(`${Constants.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload) {
    return this.http.post<any>(`${Constants.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, payload) {
    return this.http.patch<any>(`${Constants.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    return this.http.delete<any>(`${Constants.ROOT_URL}/${uri}`);
  }
}
