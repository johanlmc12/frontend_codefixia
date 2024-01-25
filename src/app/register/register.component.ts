import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router: Router) { }


  register() {
    if (!this.email || !this.password) {
      alert('Error: Debe ingresar tanto el correo electrónico y la contraseña');
      return;
    }
    this.authService.register(this.email, this.password).subscribe(
      (response: any) => {
        console.log(response);
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);  
      },
      (error: any) => {
        console.error(error);
        if (error.status === 400 && error.error.detail === 'El correo electrónico ya existe') {
          alert('Error: El correo electrónico ya está registrado');
        } else {
          alert('Error al registrar el usuario');
        }
      }
    );
  }
  
  
  
}
