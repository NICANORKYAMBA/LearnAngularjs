import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { TweetComposerComponent } from '../tweet-composer/tweet-composer.component';
import { MainFeedComponent } from '../main-feed/main-feed.component';
import { TrendsComponent } from '../trends/trends.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
	MainLayoutComponent,
	TweetComposerComponent,
	MainFeedComponent,
	TrendsComponent,
	HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
	MainLayoutComponent
  ],
  providers: [],
})
export class MainLayoutModule { }
