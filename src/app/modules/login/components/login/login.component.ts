import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {AuthService} from "../../../../pages/auth/servrices/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form!: FormGroup
  submitted = false
  response$!: Observable<any>;
  error$!: Observable<any>;


  constructor(private auth : AuthService,
              private router: Router) {

  }

  ngOnInit() {
    this.initialForm()
  }

  initialForm(){
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }


  login() {
    if(this.form.invalid){
      return
    }
    //const userLogin: UserLoginInterface = {...this.form.value}

    //this.store.dispatch(login({ userLogin }))

  }


}
