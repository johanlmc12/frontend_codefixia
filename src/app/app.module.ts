import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./auth.service";
import { PrincipalComponent } from './principal/principal.component';
import { FormRepositorioComponent } from './form-repositorio/form-repositorio.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

const rutas: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'form-repositorio', component: FormRepositorioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    FormRepositorioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    RouterModule.forRoot(rutas),
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        data: { shouldDetach: true }
      },
    ]),
  ],
  providers: [
    AuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false, // Puedes configurar esto según tus necesidades
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'Tus-Credenciales-de-API-de-Google' // Reemplaza con tus propias credenciales
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
