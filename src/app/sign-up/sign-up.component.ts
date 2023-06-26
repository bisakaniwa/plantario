import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from '../interface/user.interface';
import { UserService } from '../service/user.service';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  usuario: User = {} as User;

  constructor(
    private User: FormBuilder,
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  novoUsuario = this.User.group({
    primeiroNome: ['', [
      Validators.required
    ]],
    sobrenome: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.minLength(7),
      Validators.email,
      Validators.required
    ]],
    username: ['', [
      Validators.required
    ]],
    senha: ['', [
      Validators.required
    ]],
    confirmSenha: ['', [
      Validators.required
    ]]
  },
    { validator: MustMatch('senha', 'confirmSenha')}
  )

  novoCadastro(usuario: User) {
    this.usuario.primeiroNome = this.novoUsuario.value.primeiroNome;
    this.usuario.sobrenome = this.novoUsuario.value.sobrenome;
    this.usuario.email = this.novoUsuario.value.email;
    this.usuario.username = this.novoUsuario.value.username;
    this.usuario.senha = this.novoUsuario.value.senha;

    this.service.novoUser(usuario).subscribe(novoUsuario => {
      this.usuario = novoUsuario;
      this.router.navigate(["feed"])
    })
    alert("Cadastro realizado com sucesso!")
  }
}