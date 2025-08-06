import { Injectable } from "@angular/core";
import { dummyTasks } from "../../data/tasks";
import { newTask } from "./task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = dummyTasks


  addTask(newTask: newTask, userId: string) {
    this.tasks.unshift({
      ...newTask,
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      userId: userId
    })
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }
}
