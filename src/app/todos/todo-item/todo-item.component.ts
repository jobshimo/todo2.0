import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actinos from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('physicalInput') txtPhysicalInput!: ElementRef;

  editing:boolean = false;
  chkCompleted!:FormControl;
  txtInput!:FormControl
  constructor(private store:Store<AppState>) {

  }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.chkCompleted.valueChanges.subscribe(value => {

      this.store.dispatch(actinos.toggle({id:this.todo.id}))
    })
  }

  editMode(){
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {

      this.txtPhysicalInput.nativeElement.select();
    }, 1);

  }
  outEditMode(){
    this.editing = false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.text) return;
    this.store.dispatch(actinos.editing({id: this.todo.id, text: this.txtInput.value}))

  }

  erase(){
    this.store.dispatch(actinos.erase({id: this.todo.id}));
  }


}
