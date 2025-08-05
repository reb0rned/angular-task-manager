import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  imports: [],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @Input() isAddingTask!: boolean
  @Output() close = new EventEmitter()

  onClose() {
    return this.close.emit()
  }
}
