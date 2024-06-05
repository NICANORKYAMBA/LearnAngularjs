import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tweet {
	user: {
		avatar: string;
		username: string;
		userhandle: string;
	};
	content: string;
	media?: string[];
	timestamp: string;
	actions: {
		replies: number;
		retweets: number;
		likes: number;
		stats: number;
		view: boolean;
		share: boolean;
	};
}

@Component({
  selector: 'app-main-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-feed.component.html',
  styleUrl: './main-feed.component.scss'
})
export class MainFeedComponent implements OnInit {
	tweets: Tweet[] = [];

	ngOnInit(): void {
		this.tweets = [
			{
				user: { 
					avatar: 'assets/test-images/dp.jpg',
					username: 'exampleUser',
					userhandle: '@exampleUser'
			   	},
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				media: ['assets/test-images/HappyMan.jpg', 'assets/test-images/drawnImage.jpg'],
				timestamp: '2024-06-05 11:23:45',
				actions: {
					replies: 10,
					retweets: 40,
					likes: 90,
					stats: 123,
					view: true,
					share: true
				},
			},
			{
				user: { 
					avatar: 'assets/test-images/HappyMan.jpg',
					username: 'blogger',
					userhandle: '@blogsUser'
			   	},
				content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
				timestamp: '2024-06-05 11:23:45',
				actions: {
					replies: 15,
					retweets: 60,
					likes: 70,
					stats: 765,
					view: true,
					share: true
				},
			},
			{
				user: { 
					avatar: 'assets/test-images/HappyMan.jpg',
					username: 'newUser',
					userhandle: '@newUser'
				},
				content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
				timestamp: '2024-06-06 12:38:45',
				actions: {
					replies: 1,
					retweets: 4,
					likes: 9,
					stats: 189,
					view: true,
					share: true
				},
			},
		];
	}
}
