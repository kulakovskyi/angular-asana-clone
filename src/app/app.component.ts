import {Component, OnInit} from '@angular/core';
import {AuthService} from "./pages/auth/servrices/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getCurrentUser()
    console.log(this.authService.getCurrentUser())
  }
}
