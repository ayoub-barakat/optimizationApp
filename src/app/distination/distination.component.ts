import { Component, OnInit } from '@angular/core';
import { DistinationService } from './distination.service';

@Component({
  selector: 'app-distination',
  templateUrl: './distination.component.html',
  styleUrls: ['./distination.component.css']
})
export class DistinationComponent implements OnInit {

  distinations : any[];
  ids: any[];
  distination : any = {};
  indexToUpdate : number=-1;
  constructor(private distinationService: DistinationService) { }

  ngOnInit() {
    this.getAll();
  }

  cancel(){
    this.distination={};
    this.indexToUpdate=-1;
  }

  setToUpdate(index){
    console.log("set to update distination",index);
    this.distination=this.distinations[index];
    this.indexToUpdate=Number(index);
  }

  add(distination){
    this.distinationService.addOne(distination).subscribe(
      (data: any) => {
        console.log("add distination",data);
        this.distinations.push(distination);
        this.ids.push(data.name);
        this.distination={};},
      error => console.log(error)
    );
  }

  delete(index){
    let id= this.ids[index];
    this.distinationService.deleteOne(id).subscribe(
      (data: any) => {
        this.distinations.splice(index,1);
        this.ids.splice(index,1);
        console.log("delete distination",id);},
      error => console.log(error)
    );
  }

  update(index,distination){
      let id= this.ids[index];
      this.distinationService.updateOne(id,distination).subscribe(
        (data: any) => {
          this.distinations[index]=distination;
          this.distination={};
          this.indexToUpdate =-1;
          console.log("update distination",id);},
        error => console.log(error)
      );
    }

  getAll() : void {
      this.distinationService.getAll().subscribe(
        (data: any) => {
          this.distinations = Object.values(data);
          this.ids = Object.keys(data);
          console.log(data,this.ids) },
        error => console.log(error)
      );
  }
}
