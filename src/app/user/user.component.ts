import { Component, EventEmitter, Input, Output, computed, signal } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User
  @Input() selected!: string
  @Output() select = new EventEmitter<string>();

  get avatarPath() {
    return '/assets/users/' + this.user.avatar
  }

  onSelect() {
    return this.select.emit(this.user.id)
  }

  get isSelected() {
    return this.selected === this.user.id
  }
}
