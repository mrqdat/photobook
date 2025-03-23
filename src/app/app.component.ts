import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Mainpage } from './mainpage/mainpage.component';

@Component({
  selector: 'app-root',
  standalone: true, // Required for using `imports`
  imports: [Mainpage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '💍Countdown to Our Wedding 💖';

  constructor(private titleService: Title) {
    this.setPageTitle();
  }

  setPageTitle() {
    this.titleService.setTitle(this.title); // Sets browser tab title
  }
}
