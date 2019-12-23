import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  mobileMenu() : void{
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('nav-wrap-is-visible');
  }
  mobileMenuClose() : void{
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('nav-wrap-is-visible');
  }


  ngOnInit() {
    $('.header__nav .has-children').children('a').on('click', function (e) {
      e.preventDefault();

      if ($(".close-mobile-menu").is(":visible") == true) {

          $(this).toggleClass('sub-menu-is-open')
              .next('ul')
              .slideToggle(200)
              .end()
              .parent('.has-children')
              .siblings('.has-children')
              .children('a')
              .removeClass('sub-menu-is-open')
              .next('ul')
              .slideUp(200);

      }
  });

    }

}
