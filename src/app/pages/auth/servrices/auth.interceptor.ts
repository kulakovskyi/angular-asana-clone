import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {AlertService} from "../../../shared/modules/alert/services/alert.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.isAuthenticated()){
      if(this.authService && this.authService.token){
        req = req.clone({
          setParams: {
            auth: this.authService.token
          }
        })
      }

    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('interceptor error', error)
          if(error.status === 401){
            this.alertService.danger('401 Unauthorized')
            this.authService.logOut()
            this.router.navigate(['/auth', 'login'], {
              queryParams: {
                authFailed: true
              }
            })
          }
          return throwError(()=> error)
        })
      )

  }

}
