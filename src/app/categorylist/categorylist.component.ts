import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {
category_id: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => 
      this.category_id = params.id
    );
  }
  
}
