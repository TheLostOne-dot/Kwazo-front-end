import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }

  res: any;

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.service.login(username, password).subscribe((response:any) => {
      this.res = response.message;
      this.router.navigateByUrl("/post");
    }, (err) => {
      console.log(err)
      this.res = err.error.message;
    })
  }
}
