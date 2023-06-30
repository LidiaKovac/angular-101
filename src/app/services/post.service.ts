import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts!: Post[]
  constructor(private httpClient: HttpClient) { }

   loadPosts() {
    return this.httpClient.get<{posts: Post[]}>('https://dummyjson.com/posts');
  }
   createNewPost(data: Post) {
  //   // this.posts.push(data)
  //   let res = await fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     body: JSON.stringify({...data, userId: 5}),
  //     headers: new Headers({
  //       "Content-Type": "application/json"
  //     })
  //   })
  //   let post = await res.json()
  //   this.posts.push(post)
  }
  updateJson() {
    //un'altra volta
  }
  // updatePost(id: string, newContent: any) {
  //   let found = this.posts.find(post => post.id === id)
  //   found = { ...found, ...newContent }
  // }
}
