import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: '/board/-Nh25U4NruC2z8nTZNLf', pathMatch: "full"},
  {path: '', loadChildren: () => import('./pages/board/board.module').then(m => m.BoardModule)},

  {path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
