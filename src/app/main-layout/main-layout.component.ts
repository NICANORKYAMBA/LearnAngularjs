import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainFeedComponent } from '../main-feed/main-feed.component';
import { TweetComposerComponent } from '../tweet-composer/tweet-composer.component';
import { TrendsComponent } from '../trends/trends.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
	MainFeedComponent,
	HeaderComponent,
	TweetComposerComponent,
	TrendsComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
