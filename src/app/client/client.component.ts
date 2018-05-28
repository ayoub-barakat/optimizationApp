import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './client.service'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients : any[];
  ids: any[];
  client : any = {};
  indexToUpdate : number=-1;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAll();
  }

  cancel(){
    this.client={};
    this.indexToUpdate=-1;
  }

  setToUpdate(index){
    console.log("set to update client",index);
    this.client=this.clients[index];
    this.indexToUpdate=Number(index);
  }

  add(client){
    this.clientService.addOne(client).subscribe(
      (data: any) => {
        console.log("add client",data);
        this.clients.push(client);
        this.ids.push(data.name);
        this.client={};},
      error => console.log(error)
    );
  }

  delete(index){
    let id= this.ids[index];
    this.clientService.deleteOne(id).subscribe(
      (data: any) => {
        this.clients.splice(index,1);
        this.ids.splice(index,1);
        console.log("delete client",id);},
      error => console.log(error)
    );
  }

  update(index,client){
      let id= this.ids[index];
      this.clientService.updateOne(id,client).subscribe(
        (data: any) => {
          this.clients[index]=client;
          this.client={};
          this.indexToUpdate =-1;
          console.log("update client",id);},
        error => console.log(error)
      );
    }

  getAll() : void {
      this.clientService.getAll().subscribe(
        (data: any) => {
          this.clients = Object.values(data);
          this.ids = Object.keys(data);
          console.log(data,this.ids) },
        error => console.log(error)
      );
  }

}
