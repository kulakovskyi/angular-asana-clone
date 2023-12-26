import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import {RouterModule} from "@angular/router";
import {AuthService} from "./servrices/auth.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '',component: AuthLayoutComponent, children: [
          {path: '', redirectTo: 'login', pathMatch: "full"},
          {path: 'login', loadChildren: () => import('../../modules/login/login.module').then(m => m.LoginModule)}
        ]}
    ])
  ],
  declarations: [
    AuthLayoutComponent
  ],
  providers: [
    AuthService
  ]
})

export class AuthModule{}
