import { Component, OnInit } from '@angular/core';
import { CommandeService } from './commande.service'
import { ClientService } from '../client/client.service'
import { ChantierService } from '../chantier/chantier.service'
import { DistinationService } from '../distination/distination.service'

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  clients : any[];
  idclients : any[];
  chantiers : any[];
  idchantiers : any[];
  distinations : any[];
  iddistinations : any[];
  ids : any[];
  commandes : any[];
  commande : any = {};
  indexToUpdate : number=-1;
  constructor(private commandeService: CommandeService,
              private clientService: ClientService,
              private chantierService: ChantierService,
              private distinationService: DistinationService
            ) { }

  ngOnInit() {
    this.getAll();
  }

  cancel(){
    this.commande={};
    this.indexToUpdate=-1;
  }

  setToUpdate(index){
    console.log("set to update commande",index);
    this.commande=this.commandes[index];
    this.indexToUpdate=Number(index);
  }

  add(commande){
    this.commandeService.addOne(commande).subscribe(
      (data: any) => {
        console.log("add commande",data);
        this.commandes.push(commande);
        this.ids.push(data.name);
        this.commande={};},
      error => console.log(error)
    );
  }

  delete(index){
    let id= this.ids[index];
    this.commandeService.deleteOne(id).subscribe(
      (data: any) => {
        this.commandes.splice(index,1);
        this.ids.splice(index,1);
        console.log("delete commande",id);},
      error => console.log(error)
    );
  }

  update(index,commande){
    let id= this.ids[index];
    this.commandeService.updateOne(id,commande).subscribe(
      (data: any) => {
        this.commandes[index]=commande;
        this.commande={};
        this.indexToUpdate =-1;
        console.log("update commande",id);},
      error => console.log(error)
    );
  }

  getAll() : void {
    this.commandeService.getAll().subscribe(
      (data: any) => {
        this.commandes = Object.values(data);
        this.ids = Object.keys(data);
        console.log(data,this.ids) },
      error => console.log(error)
    );
    this.clientService.getAll().subscribe(
      (data: any) => {
        this.clients = Object.values(data);
        this.idclients = Object.keys(data);
        error => console.log(error)
      });
    this.chantierService.getAll().subscribe(
      (data: any) => {
        this.chantiers = Object.values(data);
        this.idchantiers = Object.keys(data);
        error => console.log(error)
      });
    this.distinationService.getAll().subscribe(
      (data: any) => {
        this.distinations = Object.values(data);
        this.iddistinations = Object.keys(data);
        error => console.log(error)
      });
  }

}
