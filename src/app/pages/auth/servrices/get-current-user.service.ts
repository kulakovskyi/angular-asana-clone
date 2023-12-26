import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class GetCurrentUserService {
  private userEmailSubject = new BehaviorSubject<string | null>(null);
  userEmail$ = this.userEmailSubject.asObservable();

  constructor() {
    // При инициализации сервиса проверяем значение в локальном хранилище
    this.updateUserEmailFromLocalStorage();
  }

  private updateUserEmailFromLocalStorage() {
    const userEmail = localStorage.getItem('userEmail');
    this.userEmailSubject.next(userEmail);
  }

  getCurrentUser(): string | null {
    return localStorage.getItem('userEmail');
  }

  saveUserEmailToLocalStorage(userEmail: string) {
    localStorage.setItem('userEmail', userEmail);
    this.userEmailSubject.next(userEmail);
  }
}
