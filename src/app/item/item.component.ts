import { TODO } from './../models/ToDo.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ListComponent implements OnInit {
    ToDos:TODO[]= [];
    item:string = "";
    title:string = "";
  constructor() {
   }

  ngOnInit(): void {
    }
toggleFinish(id:number)
{
  this.ToDos.map((v,i)=>{
    if(i == id) v.completed = !v.completed;
    return v ;
  })
}
delete(id :number)
{
this.ToDos=this.ToDos.filter((v,i)=> i !==id);
}
adding(){
  this.ToDos.push({
    title:this.title,
    content: this.item,
    completed:false
  })
    this.item="";
  this.title="";
}

}
