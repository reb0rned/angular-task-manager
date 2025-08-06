import { Injectable } from "@angular/core";
import { dummyTasks } from "../../data/tasks";
import { newTask } from "./task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = dummyTasks

  constructor() {
    const tasks = localStorage.getItem('tasks')

    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  addTask(newTask: newTask, userId: string) {
    this.tasks.unshift({
      ...newTask,
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      userId: userId
    })
    this.saveTasks()
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
    this.saveTasks()
  }
}
