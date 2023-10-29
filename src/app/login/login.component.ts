import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(response => {
        window.alert('Inicio de sesión exitoso');
        this.router.navigate(['/principal']);
    }, error => {
        window.alert('Error en el inicio de sesión: ' + (error.error.detail || 'Inténtalo de nuevo más tarde.'));
    });
}


}
