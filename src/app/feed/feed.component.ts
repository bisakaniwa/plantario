import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../interface/user.interface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {

  user: User = {id: 1, primeiroNome: 'Bianca', sobrenome: 'Sakaniwa', username: 'bisakaniwa', email: 'bianca@planta.com', senha: 'bianca123'} as User

  constructor(
    private auth: AuthService,
    private router: Router,
    private service: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.buscarUser(id);
  }

  buscarUser(id: number) {
    this.service.buscarUsuarioId(id).subscribe(usuario => {
      this.user = usuario
    })
  }

  logout() {
    this.auth.logout();
    this.router.navigate([""]);
  }

}
