import { Component, OnInit } from '@angular/core';
import { UsineService } from './usine.service'

@Component({
  selector: 'app-usine',
  templateUrl: './usine.component.html',
  styleUrls: ['./usine.component.css']
})
export class UsineComponent implements OnInit {
  usines : any[];
  ids: any[];
  usine : any = {};
  indexToUpdate : number=-1;
  constructor(private usineService: UsineService) { }

  ngOnInit() {
    this.getAll();
  }

  cancel(){
    this.usine={};
    this.indexToUpdate=-1;
  }

  setToUpdate(index){
    console.log("set to update usine",index);
    this.usine=this.usines[index];
    this.indexToUpdate=Number(index);
  }

  add(usine){
    this.usineService.addOne(usine).subscribe(
      (data: any) => {
        console.log("add usine",data);
        this.usines.push(usine);
        this.ids.push(data.name);
        this.usine={};},
      error => console.log(error)
    );
  }

  delete(index){
    let id= this.ids[index];
    this.usineService.deleteOne(id).subscribe(
      (data: any) => {
        this.usines.splice(index,1);
        this.ids.splice(index,1);
        console.log("delete usine",id);},
      error => console.log(error)
    );
  }

  update(index,usine){
      let id= this.ids[index];
      this.usineService.updateOne(id,usine).subscribe(
        (data: any) => {
          this.usines[index]=usine;
          this.usine={};
          this.indexToUpdate =-1;
          console.log("update usine",id);},
        error => console.log(error)
      );
    }

  getAll() : void {
      this.usineService.getAll().subscribe(
        (data: any) => {
          this.usines = Object.values(data);
          this.ids = Object.keys(data);
          console.log(data,this.ids) },
        error => console.log(error)
      );
  }
}
