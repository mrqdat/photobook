import { Component } from '@angular/core';
import { Mainpage } from "./mainpage/mainpage.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ Mainpage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Countdown to Our Wedding 💖';

  constructor(private titleService: Title) {
    this.setPageTitle();
  }

  setPageTitle(){
    this.titleService.setTitle(this.title);
  }
}
