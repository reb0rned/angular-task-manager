import { Component, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from '../../data/tasks';
import { TaskModalComponent } from "./task-modal/task-modal.component";

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
}
