import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  readonly ROOT_URL = 'http://20.113.55.136';

  constructor(private http: HttpClient) { }

  register(username:string, email:string, password:string){
    return this.http.post(this.ROOT_URL+ '/users/api/auth/signup',{username, email, password});
  }
}