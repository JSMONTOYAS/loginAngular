import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { AuthRequest } from 'src/app/service/authRequest';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  loginError: string = "";
  loginForm=this.formBuilder.group({
    username:['user',[Validators.required]],
    password:['',[Validators.required]],
  })
  constructor(private router: Router, private formBuilder:FormBuilder, private authService: AuthService){
  }
  get username(){
    return this.loginForm.controls.username;
  }
  get password(){
    return this.loginForm.controls.password;
  }
  login(){
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value as AuthRequest).subscribe({
        next: (userData) => {
         console.log(userData);
    },
    error: (errorData) => {
      console.error(errorData)
      this.loginError = errorData;
    },
    complete: () => {
      console.info("Login completo")
      this.router.navigateByUrl('/dashboard/layout/Details/id')
    }
      })
      
    }
    else{
      this.loginForm.markAllAsTouched();
      /*alert("Valores no ingresados")*/
    }
      }
}
