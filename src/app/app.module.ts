// ANGULAR:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// NGRX:
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';

// MODULES
import { TodoModule } from './todos/todo.module';

// COMPONETS:
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer })]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
