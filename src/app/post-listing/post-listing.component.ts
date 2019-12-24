import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-listing',
  templateUrl: './post-listing.component.html',
  styleUrls: ['./post-listing.component.scss']
})
export class PostListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() categorydir: string;

}
