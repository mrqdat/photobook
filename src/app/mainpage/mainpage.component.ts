import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('musicplayer', { static: false }) audio!: ElementRef<HTMLAudioElement>;

  readonly weddingDate = new Date('2025-07-12');
  readonly subject = 'Save the Date';
 
  ngOnInit(): void {
    // this.ngAfterViewInit();
    const today = new Date();
    const isWeddingDay = this.weddingDate.toDateString() === today.toDateString();
    this.bg_music = isWeddingDay ? 'assets/audio/wedding-bg-main.mp3' : 'assets/audio/wedding-bg.mp3';
    
    if (typeof window !== 'undefined') { 
      this.startCountdown();
      
    } 
  }

  private startCountdown(): void {
    this.countdownInterval = window.setInterval(() => {      
      const today = new Date();
      const distance = this.weddingDate.getTime() - today.getTime();

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

  toggleMute(): void {
    const audio = this.audio.nativeElement;
    if (audio) {
      this.is_muted = !this.is_muted;
      audio.muted = this.is_muted;
    }
  }

  // ngAfterViewInit() {
  //   const video = document.querySelector('.video-background') as HTMLVideoElement;
  //   video.src = './assets/video/bg-video.mp4';
  //   video.load();
  //   video.play().catch(error => console.log('Autoplay blocked:', error));
  // }
  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}

