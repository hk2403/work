import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  public tasks:string[]=[];
  public t="";

  addTask(){
    this.tasks.push(this.t);
  }

}
