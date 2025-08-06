import { Component, Input, inject } from '@angular/core';
import { Task } from '../task/task.model';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
  private tasksService = inject(TasksService)


  onComplete() {
    this.tasksService.removeTask(this.task.id)
  }
}
