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
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

//directives
import { CapsLockDirective } from './directives/capsLock.directive';
import { MenuComponent } from './components/menu/menu.component';
import { PaisModule } from '../pais/infrestructure/presentation/pais.module';

export function playerFactory(){
  return import('lottie-web');
}

@NgModule({
  declarations: [PageLoginComponent, LoginComponent ,
     CapsLockDirective, MenuComponent],
  imports: [
    CommonModule,
    LottieModule.forRoot({player:playerFactory}),// animation
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    PaisModule
  ],
  exports:[MenuComponent]
})
export class CoreModule { }
