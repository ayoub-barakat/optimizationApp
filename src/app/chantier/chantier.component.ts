import { Component, OnInit } from '@angular/core';
import { ChantierService } from './chantier.service'
import { ClientService } from '../client/client.service'

@Component({
  selector: 'app-chantier',
  templateUrl: './chantier.component.html',
  styleUrls: ['./chantier.component.css']
})
export class ChantierComponent implements OnInit {

  clients : any[];
  idclients : any[];
  ids : any[];
  chantiers : any[];
  chantier : any = {};
  indexToUpdate : number=-1;
  constructor(private chantierService: ChantierService,private clientService: ClientService) { }

  ngOnInit() {
    this.getAll();
  }

  cancel(){
    this.chantier={};
    this.indexToUpdate=-1;
  }

  setToUpdate(index){
    console.log("set to update chantier",index);
    this.chantier=this.chantiers[index];
    this.indexToUpdate=Number(index);
  }

  add(chantier){
    this.chantierService.addOne(chantier).subscribe(
      (data: any) => {
        console.log("add chantier",data);
        chantier.ClientName=this.clients[this.idclients.indexOf(chantier.Client)].Nom;
        this.chantiers.push(chantier);
        this.ids.push(data.name);
        this.chantier={};},
      error => console.log(error)
    );
  }

  delete(index){
    let id= this.ids[index];
    this.chantierService.deleteOne(id).subscribe(
      (data: any) => {
        this.chantiers.splice(index,1);
        this.ids.splice(index,1);
        console.log("delete chantier",id);},
      error => console.log(error)
    );
  }

  update(index,chantier){
    let id= this.ids[index];
    this.chantierService.updateOne(id,chantier).subscribe(
      (data: any) => {
        chantier.ClientName=this.clients[this.idclients.indexOf(chantier.Client)].Nom;
        this.chantiers[index]=chantier;
        this.chantier={};
        this.indexToUpdate =-1;
        console.log("update chantier",id);},
      error => console.log(error)
    );
  }

  getAll() : void {
    this.clientService.getAll().subscribe(
      (clients: any) => {
        this.clients = Object.values(clients);
        this.idclients = Object.keys(clients);
        this.chantierService.getAll().subscribe(
          (chantiers: any) => {
            console.log(Object.keys(chantiers))
            this.chantiers = Object.values(chantiers);
            this.chantiers.map(c => c.ClientName= clients[c.Client] ? clients[c.Client].Nom : '');
            this.ids = Object.keys(chantiers);
            console.log(chantiers,this.ids)
          },error => console.log(error));
      },error => console.log(error));
  }
  getNameClientById(chantier){
    let id=chantier.Client;
    console.log(chantier,this.idclients.indexOf[id]);
    //chantier.ClientName=clients[this.idclients.indexOf[id]].nom;
  }

}
