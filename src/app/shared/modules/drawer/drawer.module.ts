import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { DrawerComponent } from './components/drawer/drawer.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {GetCurrentUserService} from "../../../pages/auth/servrices/get-current-user.service";

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    DrawerComponent
  ],
  declarations: [
    DrawerComponent
  ],
  providers:[
    GetCurrentUserService
  ]
})

export class DrawerModule{}
