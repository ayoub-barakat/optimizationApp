import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DATABASE_URL, COMMANDES_URL, CLIENTS_URL} from '../app.constants';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(COMMANDES_URL+'.json');
  }

  addOne(commande) {
    return this.http.post(COMMANDES_URL+'.json',commande);
  }


  updateOne(id,commande) {
    return this.http.put(COMMANDES_URL+`/${id}.json`,commande);
  }

  deleteOne(id) {
    return this.http.delete(COMMANDES_URL+`/${id}.json`);
  }
}

