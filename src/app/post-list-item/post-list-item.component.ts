import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.post.counter++;
  }

  decrement() {
    this.post.counter--;
  }

  getColor() {
    if (this.post.counter > 0) {
      return 'green';
    } else if (this.post.counter < 0) {
      return 'red';
    }
  }
}
