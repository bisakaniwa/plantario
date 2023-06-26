import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken = "";

  constructor() { }

  autenticado(): boolean {
    return !!localStorage.getItem('token')
  }

  login(username: string, senha: string) {
    if (username === '' && senha === '') {
      localStorage.setItem("access-token", this.accessToken);
      return true;
    } else {
      return true;
    }
  }

  logout() {
    sessionStorage.clear();
  }
}
