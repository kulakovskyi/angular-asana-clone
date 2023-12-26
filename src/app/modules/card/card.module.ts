import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { CardComponent } from './components/card/card.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CardComponent
  ],
  declarations: [
    CardComponent
  ]
})

export class CardModule{}
