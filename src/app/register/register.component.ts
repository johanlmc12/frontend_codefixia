import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  correo!: string;  // nombre de la propiedad actualizado a 'correo'
  contrasena!: string;  // nombre de la propiedad actualizado a 'contrasena'

  constructor(private http: HttpClient) { }

  register(): void {
    const data = {
      email: this.correo,  // asegúrate de que este campo coincida con lo que espera tu backend
      password: this.contrasena  // asegúrate de que este campo coincida con lo que espera tu backend
    };

    this.http.post('http://127.0.0.1:8000/register', data)
      .subscribe(response => {
        console.log('Registro exitoso:', response);
      }, error => {
        console.error('Error en el registro:', error);
      });
  }
}
