import { Component } from '@angular/core';

import { HubPostService } from '../hub-post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PostCreateComponent {

  enteredTitle = '';
  enteredContent = '';

  //@Output() postCreated = new EventEmitter<HubPost>();

  constructor(public postsService: HubPostService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
