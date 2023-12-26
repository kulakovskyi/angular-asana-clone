import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { EditCardComponent } from './components/edit-card/edit-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuillModule} from "ngx-quill";
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    QuillModule.forRoot(),
    MatLegacyChipsModule,
    MatIconModule,
  ],
  declarations: [
    EditCardComponent
  ]
})

export class EditCardModule{}
