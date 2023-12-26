import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DrawerModule} from "./shared/modules/drawer/drawer.module";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {EditCardModule} from "./modules/edit-card/edit-card.module";
import {ColorPickerModule} from "./modules/color-picker/color-picker.module";
import {DeleteCardModule} from "./modules/delete-card/delete-card.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DrawerModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    EditCardModule,
    ColorPickerModule,
    DeleteCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
