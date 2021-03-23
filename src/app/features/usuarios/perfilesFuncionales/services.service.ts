import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Modulo } from 'src/app/core/models/modulo.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  dataChange = new BehaviorSubject<Modulo[]>([]);

  get data(): Modulo[] {
    return this.dataChange.value;
  }

  constructor() {
    //this.initialize();
  }
}
