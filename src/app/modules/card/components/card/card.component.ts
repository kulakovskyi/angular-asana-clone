import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tag} from "../../../../shared/types/track.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() text!: string
  @Input() createdAt!: string
  @Input() tags?: Tag[]
  @Input() issueType!: string
  @Input() author?: string
  @Input() image?: string
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

}
