import { Component, OnInit } from '@angular/core';
import { CamionService } from './camion.service';

@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.css']
})
export class CamionComponent implements OnInit {
  camions : any[];
  ids: any[];
  camion : any = {};
  indexToUpdate : number=-1;
  constructor(private camionService: CamionService) { }

  ngOnInit() {
    this.getAll();
  }

  cancel(){
    this.camion={};
    this.indexToUpdate=-1;
  }

  setToUpdate(index){
    console.log("set to update camion",index);
    this.camion=this.camions[index];
    this.indexToUpdate=Number(index);
  }

  add(camion){
    this.camionService.addOne(camion).subscribe(
      (data: any) => {
        console.log("add camion",data);
        this.camions.push(camion);
        this.ids.push(data.name);
        this.camion={};},
      error => console.log(error)
    );
  }

  delete(index){
    let id= this.ids[index];
    this.camionService.deleteOne(id).subscribe(
      (data: any) => {
        this.camions.splice(index,1);
        this.ids.splice(index,1);
        console.log("delete camion",id);},
      error => console.log(error)
    );
  }

  update(index,camion){
      let id= this.ids[index];
      this.camionService.updateOne(id,camion).subscribe(
        (data: any) => {
          this.camions[index]=camion;
          this.camion={};
          this.indexToUpdate =-1;
          console.log("update camion",id);},
        error => console.log(error)
      );
    }

  getAll() : void {
      this.camionService.getAll().subscribe(
        (data: any) => {
          this.camions = Object.values(data);
          this.ids = Object.keys(data);
          console.log(data,this.ids) },
        error => console.log(error)
      );
  }
}
