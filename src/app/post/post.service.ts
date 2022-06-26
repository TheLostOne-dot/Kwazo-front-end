import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly ROOT_URL = 'http://20.113.55.136';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.ROOT_URL+ '/posts/api/posts')
  }

  makePosts(title:string, description:string){
    return this.http.post(this.ROOT_URL+ '/posts/api/posts', {title, description}, httpOptions)
  }
}