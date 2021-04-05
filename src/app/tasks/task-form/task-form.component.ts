import { TaskService } from './../shared/task.service';
import { Task } from '../shared/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task: Task = new Task(); // instancia do objeto para acessar as propriedades pelo HTML
  title: string;

  constructor(
      private activatedRoute: ActivatedRoute, // rota que esta ativa URL atual
      private router: Router, // reponsavel por fazer as navegacoes
      private taskService: TaskService // trazer as regras de negocio
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); // acessa pelo parametro para verificar se e uma alteracao ou inclusao
    if (id) {
      // se tiver um id ele ira ira pegar o id number e se tiver uma id ele mudara o titulo
      this.task = this.taskService.getById(parseInt(id, 10)); // ele ira trazer as informacoes correspondenta a id
      this.title = 'Alterando Tarefa';
    }

  }

  onSubmit(): void{
      this.taskService.save(this.task);
      this.router.navigate(['']);
  }

}
