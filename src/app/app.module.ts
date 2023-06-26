import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback/feedback.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegacaoComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    WelcomeComponent,
    SignUpComponent,
    FeedbackComponent,
    EsqueciSenhaComponent,
    ConteudoComponent,
    FeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SignUpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
