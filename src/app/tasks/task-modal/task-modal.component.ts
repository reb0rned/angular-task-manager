import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTask } from '../task/task.model';

@Component({
  selector: 'app-task-modal',
  imports: [FormsModule],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Input() isAddingTask!: boolean
  @Output() close = new EventEmitter()
  @Output() newTask = new EventEmitter<newTask>()
  title = ''
  summary = ''
  dueDate = ''


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
    return this.newTask.emit({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    })
  }
}
