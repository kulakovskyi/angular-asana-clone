import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Talks, TracksInterface} from "../../../../shared/types/track.interface";
import {BoardInterface} from "../../../../shared/types/board.interface";
import {MatDialog} from "@angular/material/dialog";
import {TaskService} from "../../../../shared/services/task.service";
import {ActivatedRoute} from "@angular/router";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {EditCardComponent} from "../../../edit-card/components/edit-card/edit-card.component";
import {DeleteCardComponent} from "../../../delete-card/components/delete-card/delete-card.component";
import {EMPTY, Subject, Subscription, switchMap, take, takeUntil} from "rxjs";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnDestroy {
  @Input() track!: TracksInterface
  @Input() board!: BoardInterface
  @Input() boardIndex!: number
  tSub$!: Subscription
  rSub$!: Subscription
  private destroy$ = new Subject<void>();

  constructor(private _dialog: MatDialog,
              private taskService: TaskService,
              private route: ActivatedRoute) {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.tSub$) this.tSub$.unsubscribe()
  }


  filterByDate(talks: any, asc = 1) {
    talks = [...talks.sort((a: any, b: any) => (asc) * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()))];
    console.log(talks);
  }

  trackIds(): string[] {
    return this.board.tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Talks[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);


    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.updateBoardWithData()

    }
  }

  //Edit card
  addEditTalk(talk: Talks | '', track: TracksInterface, edit = false) {
    this._dialog.open(EditCardComponent, {data: {talk, edit}, width: '700px'})
      .afterClosed()
      .subscribe(newTalkData => {
        if (!newTalkData) {
          return
        }
        edit ? Object.assign(talk, newTalkData) : track.talks.unshift(newTalkData);
        this.updateBoardWithData()
      })
  }

  deleteTalk(talk: Talks, track: TracksInterface) {
    this._dialog.open(DeleteCardComponent, {data: talk, width: '500px'})
      .afterClosed()
      .subscribe(response => {
        if (response) {
          track.talks.splice(track.talks.indexOf(talk), 1);
          this.updateBoardWithData()
        }
      });

  }

  //update drag back

  updateBoardWithData() {
    this.route.params.pipe(
      take(1),
      switchMap(params => {
        const id = params['id'];
        if (this.board && id) {
          return this.taskService.updateBoard(this.board, id);
        }
        return EMPTY;
      })
    ).subscribe(() => {
      console.log('Board success updated');
    });
  }

}
