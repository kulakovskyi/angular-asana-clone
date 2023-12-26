import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { DrawerComponent } from './components/drawer/drawer.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterLinkActive} from "@angular/router";

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
  ]
})

export class DrawerModule{}
