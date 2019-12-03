import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    constructor(private _router: Router){

    }

    user: string;
    password: string;

    onLogin(): void{
        if(this.user === "admin" && this.password === "admin123"){
            this._router.navigate(['../home']);
        }else{
            alert('Usuario o contraseña incorrectos');
        }
        
    }

    ngOnInit(){}
}