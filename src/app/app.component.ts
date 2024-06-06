import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { TweetComposerComponent } from './tweet-composer/tweet-composer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
	  RouterOutlet,
	  CommonModule,
	  RouterModule,
	  HeaderComponent,
	  MainFeedComponent,
	  TweetComposerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-sass-app';
}
