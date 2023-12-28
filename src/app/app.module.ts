import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DrawerModule} from "./shared/modules/drawer/drawer.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {EditCardModule} from "./modules/edit-card/edit-card.module";
import {ColorPickerModule} from "./modules/color-picker/color-picker.module";
import {DeleteCardModule} from "./modules/delete-card/delete-card.module";
import {AuthInterceptor} from "./pages/auth/servrices/auth.interceptor";
import {AuthService} from "./pages/auth/servrices/auth.service";
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {reducers} from "./shared/store/reducer";
import {LoginEffect} from "./shared/store/effects/login.effect";

import {environment} from "../environment/environment";
import {LoaderModule} from "./shared/modules/loader/loader.module";
import {AlertModule} from "./shared/modules/alert/alert.module";

export const AppReducers: ActionReducerMap<any> = {
  'auth': reducers
}


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
    DeleteCardModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot([LoginEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
    }),
    LoaderModule,
    AlertModule,

  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
