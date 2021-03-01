import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../model/albumTable.model';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AlbumTableService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Album[]> {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    return this._http.get<Album[]>(url).pipe(
      map((albums: Album[]) => {
        return albums.slice(8, 12);
      })
    );
  }

  getAllAsFormArray(): Observable<FormArray> {
    return this.getAll().pipe(
      map((albums: Album[]) => {
        const fgs = albums.map(Album.asFormGroup);
        return new FormArray(fgs);
      })
    );
  }
}
