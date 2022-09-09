import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { MustMatch } from './must-match.validator';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  cadastroValidacao = this.cadastro.group({
    nome1: ["", [
      Validators.required
    ]],
    sobrenome: ["", [
      Validators.required
    ]],
    email: ["", [
      Validators.minLength(7),
      Validators.email,
      Validators.required
    ]],
    username: ["", [
      Validators.required
    ]],
    senha: ["", [
      Validators.required
    ]],
    confirmSenha: ["", [
      Validators.required
    ]]
  },
    { validator: MustMatch('senha', 'confirmSenha')}
  )


  
  constructor(
    private cadastro: FormBuilder,
    
  ) { }

  ngOnInit(): void {
  }

}
