import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Obj : any = {
    userName : '',
    password : ''
  };

  constructor(private router: Router){ }

  onLogin(){
    console.log(this.Obj)
    if(this.Obj.userName === "admin" && this.Obj.password === "1234"){
      this.router.navigateByUrl('/products');
    }else{
      alert("Wrong Credentials")
    }
  }
}
