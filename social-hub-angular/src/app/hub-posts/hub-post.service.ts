import { HubPost } from './hub-post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HubPostService {
  private posts: HubPost[] = [];

  private postsUpdated = new Subject<HubPost[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(postTitle: string, postContent: string) {
    const post: HubPost = {title: postTitle, content: postContent};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
