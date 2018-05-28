import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CAMIONS_URL } from '../app.constants'

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(CAMIONS_URL+'.json');
  }

  addOne(camion) {
    return this.http.post(CAMIONS_URL+'.json',camion);
  }


  updateOne(id,camion) {
    return this.http.put(CAMIONS_URL+`/${id}.json`,camion);
  }

  deleteOne(id) {
    return this.http.delete(CAMIONS_URL+`/${id}.json`);
  }
}
