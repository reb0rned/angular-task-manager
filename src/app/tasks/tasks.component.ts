import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { TaskModalComponent } from "./task-modal/task-modal.component";
import { newTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: User | null
  isAddingTask: boolean = false

  constructor(
    private tasksService: TasksService
  ) {}


  get selectedUserTasks() {
    return this.tasksService.tasks.filter(task => task.userId === this.user?.id)
  }

  newTask(newTask: newTask) {
    this.tasksService.addTask(newTask, this.user?.id!)
    this.onClose()
  }

  onAddTask() {
    return this.isAddingTask = true
  }

  onClose() {
    return this.isAddingTask = false
  }
}
