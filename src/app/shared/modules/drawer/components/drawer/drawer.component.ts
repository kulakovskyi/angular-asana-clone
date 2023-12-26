import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Observable, Subscription} from "rxjs";
import {ProjectsInterface} from "../../../../types/project.interface";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Data} from "../../../../../data/data";
import {TaskService} from "../../../../services/task.service";
import {GetCurrentUserService} from "../../../../../pages/auth/servrices/get-current-user.service";
import {select, Store} from "@ngrx/store";
import {UserResponseInterface} from "../../../../types/auth.interface";
import {currentUserSelector, isLoggedSelector} from "../../../../store/selectors";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy{

  isOpen: boolean = false
  projects$!: Observable<ProjectsInterface[]>
  name!: string | null
  isHandset$!: Observable<boolean>
  currentUser$!: Subscription;
  currentUserStore$!: Observable<UserResponseInterface | null>
  isLoggedSelector$!: Observable<boolean| null>


  constructor(private breakpointObserver: BreakpointObserver,
              private taskService: TaskService,
              private getCurrentUserService: GetCurrentUserService,
              private store: Store) {
  }

  ngOnInit() {
    this.currentUserStore$ = this.store.pipe(select(currentUserSelector))
    this.isLoggedSelector$ = this.store.pipe(select(isLoggedSelector))
    this.currentUser$ = this.getCurrentUserService.userEmail$.subscribe((userEmail) => {
      this.name = userEmail
    });
    this.projects$ = this.taskService.getAll()
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }

  ngOnDestroy() {
    this.currentUser$.unsubscribe();
  }

  toggleOpen() {
    this.isOpen = !this.isOpen
  }
}
