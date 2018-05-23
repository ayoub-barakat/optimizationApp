import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person, SearchService } from '../shared';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientService } from '../client/client.service'
import { CommandeService } from '../commande/commande.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string;
  show : boolean=true;
  searchResults: Array<Person>;
  sub: Subscription;
  clients : any[];
  ids : any[];
  idclients : any[];
  commandes : any[];
  commande : any = {};

  constructor(private searchService: SearchService,
              private route: ActivatedRoute,
              private clientService: ClientService,
              private commandeService: CommandeService) { }

  ngOnInit() {
    this.getAll();
    this.sub = this.route.params.subscribe(params => {
      if (params['term']) {
        this.query = decodeURIComponent(params['term']);
        this.search();
      }
    });
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
  }

  search(): void {
    this.searchService.search(this.query).subscribe(
      (data: any) => { this.searchResults = data; },
      error => console.log(error)
    );
  }

  getCommandeFromClient(index) {
    let idClient=this.idclients[index];
    if(idClient)
    console.log(idClient);
    this.commande=this.commandes.find(function (item) {
      return item.Client=idClient;
    });
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
