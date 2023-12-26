import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BoardLayoutComponent } from './components/board-layout/board-layout.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'board/:id', component: BoardLayoutComponent}
    ])
  ],
  declarations: [
    BoardLayoutComponent
  ]
})

export class BoardModule{}
