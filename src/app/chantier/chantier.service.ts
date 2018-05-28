import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CHANTIERS_URL } from '../app.constants'

@Injectable({
  providedIn: 'root'
})
export class ChantierService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(CHANTIERS_URL+'.json');
  }

  addOne(chantier) {
    return this.http.post(CHANTIERS_URL+'.json',chantier);
  }


  updateOne(id,chantier) {
    return this.http.put(CHANTIERS_URL+`/${id}.json`,chantier);
  }

  deleteOne(id) {
    return this.http.delete(CHANTIERS_URL+`/${id}.json`);
  }
}
