import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-speaker-card',
  standalone: true,
  imports: [],
  templateUrl: './speaker-card.component.html',
  styleUrl: './speaker-card.component.css'
})
export class SpeakerCardComponent implements AfterViewInit {

  @ViewChild('level') levelElement!: ElementRef;
  @ViewChild('card') cardElement!: ElementRef;

  ngAfterViewInit(): void {
    this.initializeLevel();
    this.setupCardFlip();
  }

  private initializeLevel() {
    const level = this.levelElement.nativeElement;
    const levelCap = parseInt(level.getAttribute('data-level-cap'), 10);
    const curLevel = parseInt(level.getAttribute('data-level-current'), 10);

    for (let i = 1; i <= levelCap; i++) {
      const star = document.createElement('div');
      star.className = i <= curLevel ? 'star current-level' : 'star';
      level.appendChild(star);
    }
  }

  private setupCardFlip() {
    const card = this.cardElement.nativeElement;
    card.addEventListener('click', (e: Event) => {
      e.stopPropagation();
      if (card.classList.contains('card--flipped')) {
        card.classList.add('card--unflip');
        setTimeout(() => {
          card.classList.remove('card--flipped', 'card--unflip');
        }, 500);
      } else {
        card.classList.add('card--flipped');
      }
    });
  }

}
