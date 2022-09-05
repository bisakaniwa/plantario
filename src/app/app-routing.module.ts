import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/sign-in', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'senha', component: EsqueciSenhaComponent },
  { path: 'login/esqueci-senha', redirectTo: 'senha', pathMatch: 'full' },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
