import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as emojione from 'emojione';

@Component({
  selector: 'app-tweet-composer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tweet-composer.component.html',
  styleUrl: './tweet-composer.component.scss'
})
export class TweetComposerComponent implements OnInit {
	@Output() newTweet = new EventEmitter<string>();
	@Input() name = '';
	@Input() text = '';
	@Input() image = '';
	@Input() link = '';
	@Input() linkText = '';
	@Input() linkUrl = '';
	@Input() linkTitle = '';
	@Input() linkDescription = '';
	@Input() linkImage = '';
	@Input() linkMedia = '';
	@Input() linkMediaTitle = '';
	@Input() linkMediaDescription = '';
	@Input() linkMediaImage = '';
	@Input() linkMediaUrl = '';

	constructor() {}

	ngOnInit(): void {}

	submitTweet() {
		if (this.text) {
			this.newTweet.emit(this.text);
			this.text = '';
			this.name = '';
			this.image = '';
			this.link = '';
			this.linkText = '';
			this.linkUrl = '';
			this.linkTitle = '';
			this.linkDescription = '';
			this.linkImage = '';
			this.linkMedia = '';
			this.linkMediaTitle = '';
			this.linkMediaDescription = '';
			this.linkMediaImage = '';
			this.linkMediaUrl = '';
		}
	}

	openMediaUploader() {
		const fileInput = document.createElement('input');
		fileInput.type = 'file';
		fileInput.accept = 'image/*';
		fileInput.addEventListener('change', (event) => {
			const file = (event.target as HTMLInputElement).files?.[0];
			if (file) {
				const reader = new FileReader();
				reader.onload = () => {
					this.image = reader.result as string;
				};
				reader.readAsDataURL(file);
			}
		});
		fileInput.click();
	}

	//openEmojiPicker() {
	//	const picker = new emojione.Picker({
	//		search: false,
	//		onSelect: (emoji: string) => {
	//			this.text += emoji.unicode;
	//		},
	//	});
	//	picker.popupPicker();
	//}

	//insertEmoji(emoji: string) {
	//	this.text += emoji;
	//}

	openEmojiPicker() {
		const picker = new emojione.Picker({
			onSelect: (emoji: string) => {
				this.insertEmoji(emoji);
			},
		});
		picker.showPicker();
	}
	
	insertEmoji(emoji: string) {
		this.text += emoji;
	}
}
