import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DATABASE_URL,CLIENTS_URL } from '../app.constants'


@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(CLIENTS_URL+'.json');
  }

  addOne(client) {
    return this.http.post(CLIENTS_URL+'.json',client);
  }

  updateOne(id,client) {
    return this.http.put(CLIENTS_URL+`/${id}.json`,client);
  }

  deleteOne(id) {
    return this.http.delete(CLIENTS_URL+`/${id}.json`);
  }
}
