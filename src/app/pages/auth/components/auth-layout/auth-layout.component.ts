import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../../../shared/services/task.service";
import {Data} from "../../../../data/data";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit{
  constructor(private taskService: TaskService) {
  }

  data = Data

  ngOnInit() {

  }

}
