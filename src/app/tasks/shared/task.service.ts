import { Injectable } from '@angular/core';
import { Task } from './task'; // importa task.ts



// regras de negocio da aplicacao

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    tasks: Task[] = [

    ];

  constructor() { }

  getAll(): any {

      const list = window.localStorage.getItem('lista-tarefas'); // carregar a lista na memoria e retorna uma string
      if (list){ // verifica se list tem alguma informacao
        this.tasks = JSON.parse(list);
      }
      return this.tasks;
  }

  getById(id: number): Task {
    const task = this.tasks.find((value) => value.id === id); // find procura somente um item de acordo com o parametro passado
    return task;
  }
// cadastrar alterar deletar
  save(task: Task): void {
    if (task.id){ // editor de tarefa ira pegar o id da tarefa por parametro
      const taskArr = this.getById(task.id); // usando a funcao getbyid para localizar o id da rota
      taskArr.description = task.description;
      taskArr.completed = task.completed;

    }else{ // caso nao tenha um id novo ele ira criar uma nova tarefa

      let lastId = 0;

      if (this.tasks.length > 0){
           lastId = this.tasks [this.tasks.length - 1].id;
        }


      task.id = lastId + 1;
      task.completed = false; // adicionar uma tarefa ela nao aparecera com status "completado"
      this.tasks.push(task);
    }

    window.localStorage.setItem('lista-tarefas',  JSON.stringify (this.tasks));
    // guardar informacoes do array em uma memoria local do navegador

  }

  delete(id: number): void{
      const taskIndex = this.tasks.findIndex ((value) => value.id === id); // procura o id passado por parameto
      this.tasks.splice(taskIndex, 1); // metodo splice remove um item do array

      window.localStorage.setItem('lista-tarefas',  JSON.stringify (this.tasks)); // novamente ao deletar e preciso salvar na memoria
  }
}
