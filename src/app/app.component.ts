import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TaskService} from "./shared/services/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  board$!: Observable<any>

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.board$ = this.taskService.getAll()
  }

}
