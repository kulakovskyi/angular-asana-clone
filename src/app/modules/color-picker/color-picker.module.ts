import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import {ColorChromeModule} from "ngx-color/chrome";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    ColorChromeModule,
    MatButtonModule
  ],
  declarations: [
    ColorPickerComponent
  ]
})

export class ColorPickerModule{}
