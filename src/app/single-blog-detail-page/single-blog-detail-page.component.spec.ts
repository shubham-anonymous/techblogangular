import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogDetailPageComponent } from './single-blog-detail-page.component';

describe('SingleBlogDetailPageComponent', () => {
  let component: SingleBlogDetailPageComponent;
  let fixture: ComponentFixture<SingleBlogDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBlogDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBlogDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
