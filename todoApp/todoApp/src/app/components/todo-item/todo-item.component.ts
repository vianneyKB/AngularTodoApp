import { Component, OnInit, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
//import { EventEmitter } from 'events';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
 @Input() todo: Todo;
 //@Output() checkedItem = new EventEmitter();

  constructor() { }

  ngOnInit() 
  {
  }
  //doneEdit(todo: Todo): void
  //{
  //  this.checkedItem.emit(todo);
 // }

}
