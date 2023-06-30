import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-single-post-row',
  templateUrl: './single-post-row.component.html',
  styleUrls: ['./single-post-row.component.scss']
})
export class SinglePostRowComponent implements OnInit {
  @Input() post!: Post
  constructor() { }

  ngOnInit(): void {
  }

}
