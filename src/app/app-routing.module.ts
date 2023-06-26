import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { FeedComponent } from './feed/feed.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/sign-up', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'senha', component: EsqueciSenhaComponent },
  { path: 'login/esqueci-senha', redirectTo: 'senha', pathMatch: 'full' },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'feed/:id', component: FeedComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
