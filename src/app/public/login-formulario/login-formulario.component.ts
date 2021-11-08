import { Router } from '@angular/router';
import { SecurityService } from './../../services/security.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/services/security.service';

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.css']
})
export class LoginFormularioComponent {
  usuario: Usuario = {
    id: 0,
    userName: '',
    password: ''
  };

  addressForm = this.fb.group({

    id: [""],
    userName: [null, Validators.required],
    password: [null, Validators.required],

  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder, private securitySevice: SecurityService, private router: Router) {}

  onLogin() {
    this.securitySevice.login(this.usuario).subscribe(
      (res) =>{
        localStorage.setItem('token', res.token);
        this.router.navigate(['personas']);
      }
    )
  }
}
