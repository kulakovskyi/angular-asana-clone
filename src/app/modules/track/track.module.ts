import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { TrackComponent } from './components/track/track.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {CdkDrag, CdkDropList} from "@angular/cdk/drag-drop";
import {CardModule} from "../card/card.module";

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    CdkDropList,
    CardModule,
    CdkDrag
  ],
  exports: [
    TrackComponent
  ],
  declarations: [
    TrackComponent
  ],
})

export class TrackModule{}
