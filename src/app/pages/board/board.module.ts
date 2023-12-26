import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BoardLayoutComponent } from './components/board-layout/board-layout.component';
import {RouterModule} from "@angular/router";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {TrackModule} from "../../modules/track/track.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'board/:id', component: BoardLayoutComponent}
    ]),
    CdkDropList,
    CdkDrag,
    TrackModule
  ],
  declarations: [
    BoardLayoutComponent
  ]
})

export class BoardModule{}
