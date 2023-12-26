import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Talks} from "../../../../shared/types/track.interface";

@Component({
  selector: 'app-delete-card',
  templateUrl: './delete-card.component.html',
  styleUrls: ['./delete-card.component.scss']
})
export class DeleteCardComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public talk: Talks) {}
}
