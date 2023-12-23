import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AbstractControl,

  Validators,
} from '@angular/forms';

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

  constructor(private readonly router: Router) {
    this.createFormLogin();
  }

  login() {
    //angulakr tiene uns ervicio llamada router que tiene una opcion para navegar 
    //por componentes declarados en las rotas
   // this.router.navigate(['test']);
   console.log(this.fg);
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
        ]),
        password: new FormControl('', Validators.required),
      }
      //this.validatorPasswordAndConfirm
    );
  }
}