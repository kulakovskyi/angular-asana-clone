import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AlertComponent } from './components/alert/alert.component';
import {AlertService} from "./services/alert.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent
  ],
  providers:[
    AlertService
  ]
})

export class AlertModule{}
