import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DESTINATIONS_URL } from '../app.constants'

@Injectable({
  providedIn: 'root'
})
export class DistinationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(DESTINATIONS_URL+'.json');
  }

  addOne(chantier) {
    return this.http.post(DESTINATIONS_URL+'.json',chantier);
  }


  updateOne(id,chantier) {
    return this.http.put(DESTINATIONS_URL+`/${id}.json`,chantier);
  }

  deleteOne(id) {
    return this.http.delete(DESTINATIONS_URL+`/${id}.json`);
  }
}
