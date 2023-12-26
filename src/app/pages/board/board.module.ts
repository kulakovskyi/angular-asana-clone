import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BoardLayoutComponent } from './components/board-layout/board-layout.component';
import {RouterModule} from "@angular/router";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {TrackModule} from "../../modules/track/track.module";
import {LoaderModule} from "../../shared/modules/loader/loader.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'board/:id', component: BoardLayoutComponent}
        ]),
        CdkDropList,
        CdkDrag,
        TrackModule,
        LoaderModule
    ],
  declarations: [
    BoardLayoutComponent
  ]
})

export class BoardModule{}
