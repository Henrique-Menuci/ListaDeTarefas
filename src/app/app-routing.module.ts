import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 // rotas que a aplicacao ira utilizar
const routes: Routes = [

    { path: '', component: TaskListComponent}, // pagina inicial url vazio
    { path: 'new', component: TaskFormComponent }, // url de nova tarefa
    { path: 'edit/:id', component: TaskFormComponent} // editar uma tarefa, passando o parametro de id

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
