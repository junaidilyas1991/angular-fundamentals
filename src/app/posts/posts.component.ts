import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  url:string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getAll(this.url)
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post: Post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(this.url, post)
      .subscribe(
        newPost => {
          post.id = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError)
          } else {
            throw error;
          }
        }
      );
  }

  updatePost(post: Post) {
    this.service.update(this.url, post, { isRead: true })
      .subscribe(updatedPost => {
        // Handle the updated post if needed
      });
  }

  deletePost(post: Post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(this.url, post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error;
          }
        }
      );
  }

  deletePostWithPromise(post:Post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.deleteWithPromise(this.url, post.id)
      .then(() => {
        // Deletion completed successfully
      })
      .catch((error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          throw error;
        }
      });
  }
}

interface Post {
  id?: number;
  title: string;
}