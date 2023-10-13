import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivcenterComponent } from './divcenter/divcenter.component';
import { TodoComponent } from './todo/todo.component';
import { NnnComponent } from './nnn/nnn.component';

const routes: Routes = [
  {path:'divcenter',component:DivcenterComponent},
  {path:"todo", component:TodoComponent},
  {path:"nnn",component:NnnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
