import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts!: Array<Post>
  constructor(private postSrv: PostService) { }

  async ngOnInit(): Promise<void> {
    this.postSrv.loadPosts().subscribe(({posts})=> this.posts = posts )
    this.posts = this.postSrv.posts
  }
  hidePost(id: string) {
    // this.postSrv.updatePost(id, { active: false })
  }
}
