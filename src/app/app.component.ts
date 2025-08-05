import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../data/users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-project';
  users = DUMMY_USERS
  selectedUser: User | null = null


  onSelectUser(id: string) {
    this.selectedUser = this.users.find(user => user.id === id) || null
  }
}
