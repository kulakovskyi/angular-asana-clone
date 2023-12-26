import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isSubmittedSelector} from "../../../../shared/store/selectors";
import {loginAction} from "../../../../shared/store/actions/login.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form!: FormGroup
  submitted = false
  isSubmitting$!: Observable<boolean>


  constructor(private store: Store) {

  }

  ngOnInit() {
    this.initialValue()
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

  initialValue(){
    this.isSubmitting$ = this.store.pipe(select(isSubmittedSelector))
  }


  login() {
    if(this.form.invalid) return
    this.store.dispatch(loginAction({request: this.form.value}))
  }
}
