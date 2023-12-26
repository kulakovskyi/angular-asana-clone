import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {ProjectsInterface} from "../../../../types/project.interface";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Data} from "../../../../../data/data";
import {TaskService} from "../../../../services/task.service";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit{

  isOpen: boolean = false
  projects$!: Observable<ProjectsInterface[]>
  name!: string | null
  isHandset$!: Observable<boolean>


  constructor(private breakpointObserver: BreakpointObserver,
              private taskService: TaskService) {
  }

  ngOnInit() {
    this.projects$ = this.taskService.getAll()
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }

  toggleOpen() {
    this.isOpen = !this.isOpen
  }
}
