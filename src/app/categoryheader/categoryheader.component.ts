import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoryheader',
  templateUrl: './categoryheader.component.html',
  styleUrls: ['./categoryheader.component.scss']
})
export class CategoryheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.activedir)
  }
  @Input() activedir: string;
}
