import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { customPassword } from '../post-list/custom-password.validator';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  newPost: FormGroup = new FormGroup({
    title: new FormControl("", [customPassword]),
    body: new FormControl(""),
    active: new FormControl(true)
  })
  constructor() {

    this.newPost.valueChanges.subscribe(val => {
      this.newPost.setValue({
        ...this.newPost.value,
        title: this.newPost.value.title?.toUpperCase(),
      }, { emitEvent: false })
    })

  }
  submitPost(form: FormGroup) {
    console.log(form.status)
  }
  ngOnInit(): void {
  }
  // submitPost(ev: SubmitEvent,) {
  //   try {

  //     ev.preventDefault()
  //     const fd = new FormData(ev.target as HTMLFormElement)
  //     console.log(fd)
  //     const newPost = {} as Post
  //     fd.forEach((value, key) => newPost[key as keyof Post] = value as string)
  //     this.postSrc.createNewPost(newPost);
  //     (ev.target as HTMLFormElement).reset()
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
}
