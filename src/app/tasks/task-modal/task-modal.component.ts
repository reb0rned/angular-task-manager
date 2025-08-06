import { Component, EventEmitter, Input, Output, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-modal',
  imports: [FormsModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Input() isAddingTask!: boolean
  userId = input.required<string>()
  @Output() close = new EventEmitter()
  title = ''
  summary = ''
  dueDate = ''

  private tasksService = inject(TasksService)


  onClose() {
    return this.close.emit()
  }

  onOverlayClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('modal-overlay')) {
      return this.close.emit()
    }
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }, this.userId())
    this.close.emit()
  }
}
