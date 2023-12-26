import {Component, OnInit} from '@angular/core';
import {BoardInterface} from "../../../../shared/types/board.interface";
import {map, Observable, switchMap} from "rxjs";
import {TaskService} from "../../../../shared/services/task.service";
import {ActivatedRoute, Params} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {TracksInterface} from "../../../../shared/types/track.interface";

@Component({
  selector: 'app-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.scss']
})
export class BoardLayoutComponent implements OnInit{
  board$!: Observable<BoardInterface>

  constructor(private taskService: TaskService,
              private route: ActivatedRoute) {}


  ngOnInit() {
    this.board$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.taskService.getIdProject(params['id']);
      }),
      map((boards:any) => boards[0])
    );
  }


  onTrackDrop(event: CdkDragDrop<TracksInterface[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
