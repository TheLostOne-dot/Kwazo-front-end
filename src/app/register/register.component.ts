import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private service: RegisterService,private router: Router) {}

  res: any;

  ngOnInit(): void {}

  register(username: string, email: string, password: string) {
    this.service.register(username, email, password).subscribe(
      (response:any) => {
        this.res = response.message;
        setTimeout(() => {
          this.router.navigateByUrl("/login");
        }, 3000)
        
      },
      (err) => {
        this.res =  err.error.message;
      }
    );
  }
}
