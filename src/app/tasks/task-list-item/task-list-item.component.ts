import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  //a task sera um input
  @Input()
  task: Task;

  constructor(private taskService: TaskService) { } //chama o metodo da classe

  ngOnInit(): void {
  }

  remove(task: Task){
    this.taskService.delete(task.id); // deletar
  }

  onCompletedCheckChange(task: Task){
    this.taskService.save(task); //salvar o checkbox
  }

}
