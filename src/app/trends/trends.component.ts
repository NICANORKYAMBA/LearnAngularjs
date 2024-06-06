import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Trend {
	name: string;
	value: number;
}

@Component({
  selector: 'app-trends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.scss'
})
export class TrendsComponent implements OnInit {
	trends: Trend[] = [
		{ name: '#ClimateChange', value: 4000 },
		{ name: '#KenyaElections2027', value: 23000 },
		{ name: '#SpaceXLaunch', value: 10000 },
		{ name: 'StateHouse', value: 5000 },
	];

  constructor() { }

  ngOnInit(): void {
  }

}
