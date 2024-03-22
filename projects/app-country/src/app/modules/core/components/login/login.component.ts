import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AbstractControl,

  Validators,
} from '@angular/forms';
import { Auth } from '../../auth/domain/auth';
import { AuthApplication } from '../../auth/application/auth.application';

@Component({
  selector: 'appC-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /**
   *para utilizar los FormGroup de agrega una instancia de FormGroup
   */
   fg!: FormGroup;
   capsLockOn: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly application: AuthApplication,
    ) {
    this.createFormLogin();
  }

  login() {
    //angular tiene un servicio llamada router que tiene una opcion para navegar 
    //por componentes declarados en las rotas
   // this.router.navigate(['test']);
   const { email, password } = this.fg.value;
   const auth = new Auth(email, password);
   this.application.login(auth);
  //  if(this.fg.valid){
  //   this.router.navigate(['capital']);
  //  }
  }

  createFormLogin() {
    this.fg = new FormGroup(
      {
        //FormControl soporta 2 parametros
        /**
         * FormControl /(1 ,2)
         * 1. Es el valor que se va a mostras en el input
         * 2.es un arreglo de validadoresk
         */
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
          ) /*this.validatorEmail*/,
          this.validatorDomainEmail('hotmail.com', 'gmail.com', 'example.com')
        ]),
        password: new FormControl('', Validators.required),
        //confirmPassword: new FormControl('', Validators.required), input
      }
      //this.validatorPasswordAndConfirm
    );
  }

  //validar Domino de email
  validatorDomainEmail(...filterDomains: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.value;
      if (!email) return null;

      const domain = email.split('@')[1];
      if (filterDomains.includes(domain)) return null;

      return { filterDomains };
    };
  }

  //confirmacion de contraseña 
  validatorPasswordAndConfirm(fg: AbstractControl) {
    // si no existe get  password o confir password que regrese nulo
    if (!fg.get('password') || !fg.get('confirmPassword')) return null;

    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;

    if (password === confirmPassword) return null;

    return { passwordAndConfirm: true };
  }

  
  
}