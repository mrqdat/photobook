import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class Mainpage implements OnInit, OnDestroy {
  days = '00';
  hours = '00';
  minutes = '00';
  seconds = '00';
  bg_music = '';
  is_muted = false;
  private countdownInterval?: number;

  readonly weddingDate = new Date('2025-07-12').getTime();
  readonly subject = 'Save the Date';
  readonly now = new Date().getTime();
 
  ngOnInit(): void {
    if(this.now === this.weddingDate) {
      this.bg_music = 'assets/audio/wedding-bg-main.mp3';
    }
    else{
      this.bg_music = 'assets/audio/wedding-bg.mp3';
    }
    if (typeof window !== 'undefined') { 
      // Run only in the browser
      this.startCountdown();
    } 
    
  }

  private startCountdown(): void {
    this.countdownInterval = window.setInterval(() => {      
      const today = new Date().getTime(); 
      const distance = this.weddingDate - today;

      if (distance <= 0) {
        clearInterval(this.countdownInterval);
        this.days = this.hours = this.minutes = this.seconds = '00';
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, '0');
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, '0');
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, '0');
    }, 1000);
  }

  touggleAudio(): void {
    const audio = document.getElementById('musicplayer') as HTMLAudioElement;
    this.is_muted = !this.is_muted;
    audio.muted = this.is_muted;
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
