import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task/task.model';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task
  @Output() completed = new EventEmitter()

  onComplete() {
    return this.completed.emit(this.task.id)
  }
}
