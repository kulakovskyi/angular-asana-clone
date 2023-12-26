import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '',component: AuthLayoutComponent}
    ])
  ],
  declarations: [
    AuthLayoutComponent
  ]
})

export class AuthModule{}
