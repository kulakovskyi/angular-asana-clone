import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../pages/auth/servrices/auth.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ]),
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers:[
    AuthService
  ]
})

export class LoginModule{}
