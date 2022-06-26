import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
readonly ROOT_URL = 'http://20.113.55.136';
  constructor(private http: HttpClient,) { }

  login(username: string, password: string){
    return this.http.post(this.ROOT_URL+ '/users/api/auth/signin',{username, password}, httpOptions)
  } 
}