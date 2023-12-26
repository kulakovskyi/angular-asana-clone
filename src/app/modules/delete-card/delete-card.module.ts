import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { DeleteCardComponent } from './components/delete-card/delete-card.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [
    DeleteCardComponent
  ]
})

export class DeleteCardModule{}
