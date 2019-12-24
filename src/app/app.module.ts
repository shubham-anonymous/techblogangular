import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { FooterComponent } from './footer/footer.component';
import { ExtrasComponent } from './extras/extras.component';
import { PostListingComponent } from './post-listing/post-listing.component';
import { CategoryheaderComponent } from './categoryheader/categoryheader.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { SingleBlogDetailPageComponent } from './single-blog-detail-page/single-blog-detail-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroBannerComponent,
    FooterComponent,
    ExtrasComponent,
    PostListingComponent,
    CategoryheaderComponent,
    CategorylistComponent,
    SingleBlogDetailPageComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
