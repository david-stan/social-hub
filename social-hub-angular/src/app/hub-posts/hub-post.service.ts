import { HubPost } from './hub-post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HubPostService {
  private posts: HubPost[] = [];

  private postsUpdated = new Subject<HubPost[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: HubPost[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(postTitle: string, postContent: string) {
    const post: HubPost = {id: null, title: postTitle, content: postContent};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
