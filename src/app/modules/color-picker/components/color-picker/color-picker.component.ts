import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  selectedColor = '';

  constructor(public dialogRef: MatDialogRef<ColorPickerComponent>) {}

  onChangeComplete(c: any) {
    this.selectedColor = c.color.hex;
  }

}
