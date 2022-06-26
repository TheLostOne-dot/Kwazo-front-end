import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private service: PostService, private router: Router) {}

  res: any;
  posts: any;
  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.service.getPosts().subscribe(
      (response: any) => {
        this.posts = response;
        console.log(response);
      },
      (err) => {
        console.log(err);
        this.res = err.error.message;
      }
    );
  }

  makePost(title: string, content: string) {
    this.service.makePosts(title, content).subscribe(
      (response: any) => {
        this.res = response.message;
        window.location.reload();
      },
      (err) => {
        console.log(err);
        this.res = err.error.message;
      }
    );
  }
}
