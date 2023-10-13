import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivcenterComponent } from './divcenter/divcenter.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { NnnComponent } from './nnn/nnn.component';

@NgModule({
  declarations: [
    AppComponent,
    DivcenterComponent,
    TodoComponent,
    NnnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
