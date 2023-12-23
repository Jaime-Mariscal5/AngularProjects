import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';


//material
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
export function playerFactory(){
  return import('lottie-web');
}

@NgModule({
  declarations: [PageLoginComponent, LoginComponent],
  imports: [
    CommonModule,
    LottieModule.forRoot({player:playerFactory}),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
