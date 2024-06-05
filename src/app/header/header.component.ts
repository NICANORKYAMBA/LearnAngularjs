import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavigationLink {
	label: string;
	path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
	showNav = false;

	navigationLinks: NavigationLink[] = [
		{ label: 'Home', path: '/' },
		{ label: 'About', path: '/about' },
		{ label: 'Contact', path: '/contact' },
		{ label: 'Blog', path: '/blog' },
		{ label: 'Profile', path: '/profile' }
	];

	showSearchBar = true;

	onSearch() {
		console.log('Search triggered');
		this.showSearchBar = true;
	}

	ngOnInit(): void {
	}

	toggleNav() {
		this.showNav = !this.showNav;
	}

}
