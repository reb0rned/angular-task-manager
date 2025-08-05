import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../../data/tasks';
import { TaskModalComponent } from "./task-modal/task-modal.component";
import { newTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskModalComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: User | null
  tasks = dummyTasks
  isAddingTask: boolean = false


  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user?.id)
  }

  onCompleted(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }

  onAddTask() {
    return this.isAddingTask = true
  }

  onClose() {
    return this.isAddingTask = false
  }

  newTask(newTask: newTask) {
    this.tasks.unshift({
      ...newTask,
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      userId: this.user?.id!
    })

    this.onClose()
  }
}
