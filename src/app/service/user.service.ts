import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  buscarTodos() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/User")
  }

  novoUser(usuario: User) : Observable<User>{
    return this.http.post<User>("http://localhost:8080/User", usuario)
  };

  atualizarUser(usuario: User) : Observable<User>{
    return this.http.put<User>("http://localhost:8080/User/atualizar", usuario)
  };

  buscarUsuarioId(id: number) : Observable<User>{
    return this.http.get<User>("http://localhost:8080/User/" + id)
  };

  buscarUsuarioUsername(username: string) : Observable<User[]>{
    return this.http.get<User[]>("http:/localhost:8080/User/" + username)
  };

  buscarUsuarioSenha(senha: string) : Observable<User[]>{
    return this.http.get<User[]>("http:/localhost:8080/User/" + senha)
  };

  buscarUsuarioEmail(email: string) : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/User/" + email)
  };

  deletarUsuario(id: number) : Observable<User>{
    return this.http.delete<User>("http://localhost:8080/User/" + id)
  };
}
