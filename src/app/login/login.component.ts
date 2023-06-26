import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {id: 1, primeiroNome: 'Bianca', sobrenome: 'Sakaniwa', username: 'bisakaniwa', email: 'bianca@planta.com', senha: 'bianca123'} as User;
  accessToken = ''

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  loginForm = this.form.group({
    username: ['', Validators.required],
    senha: ['', Validators.required]
  })

  login(): void {
    var checked = true;
    if (this.loginForm.valid) {
      localStorage.setItem('token', this.accessToken)
      localStorage.setItem('username', this.user.username)
      localStorage.setItem('name', this.user.primeiroNome)
      alert("Sucesso!")
      this.router.navigate(['/feed/', this.user.id]);

    } else if (!this.loginForm.valid) {
      checked = false;
      alert("Ops! Algo deu errado, tente novamente.")
    }

    // if (this.auth.login(this.user.username, this.user.senha)) {
    //   this.router.navigate(["/feed/", this.user.id]);
    //   return true;
    // } else {
    //   // substituir por angular material
    //   alert("Ops, algo deu errado! Por favor, tente novamente.")
    //   return true;
    // }
  }

}
