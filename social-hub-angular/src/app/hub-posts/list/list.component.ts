import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { HubPost } from '../hub-post.model';
import { HubPostService } from '../hub-post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: HubPost[] = [];

  private postsSub: Subscription;

  constructor(public postsService: HubPostService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: HubPost[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
