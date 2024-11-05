import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-landinngpage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './landinngpage.component.html',
  styleUrl: './landinngpage.component.css'
})
export class LandinngpageComponent  implements OnInit,OnDestroy{
  private slides: HTMLCollectionOf<HTMLElement>;
  private indicator: HTMLElement | null;
  private dots: HTMLCollectionOf<HTMLElement>;
  private autoplay: string | null;
  private count: number = 0;
  private interval: number = 5000;
  private set: NodeJS.Timeout | undefined;

  activeElement: string = 'blair'; // Start with 'blair'
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.activeElement = this.activeElement === 'blair' ? 'dios' : 'blair';
    }, 2000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  constructor() {
      this.slides = document.getElementsByClassName("slide") as HTMLCollectionOf<HTMLElement>;
      this.indicator = document.getElementById("indicator");
      this.dots = document.getElementsByClassName("dots") as HTMLCollectionOf<HTMLElement>;
      this.autoplay = document.getElementsByClassName("container")[0]?.getAttribute("data-autoplay");
      
      window.onload = () => {
          this.initialize();
          this.showSlide(this.count);
          this.createIndicators();
      };
  }

  private initialize(): void {
      if (this.autoplay === "true") {
          this.set = setInterval(() => this.next(), this.interval);
      }
  }

  private createIndicators(): void {
      for (let j = 0; j < this.slides.length; j++) {
          if (this.indicator) {
              this.indicator.innerHTML += `<div class='dots' onclick='change(${j})'></div>`;
          }
      }
      this.updateDotStyles();
  }

  private showSlide(index: number): void {
      for (let j = 0; j < this.slides.length; j++) {
          const slide = this.slides[j] as HTMLElement;
          slide.style.opacity = "0";
          this.dots[j].style.background = "#bdbdbd";
      }
      const currentSlide = this.slides[index] as HTMLElement;
      currentSlide.style.opacity = "1";
      this.dots[index].style.background = "#696969";
  }

  public change(index: number): void {
      clearInterval(this.set);
      this.count = index;
      this.showSlide(this.count);
      this.initialize();
  }

  public next(): void {
      this.count = (this.count + 1) % this.slides.length;
      this.showSlide(this.count);
      this.initialize();
  }

  public prev(): void {
      this.count = (this.count - 1 + this.slides.length) % this.slides.length;
      this.showSlide(this.count);
      this.initialize();
  }

  private updateDotStyles(): void {
      for (let j = 0; j < this.dots.length; j++) {
          this.dots[j].style.background = (j === this.count) ? "#696969" : "#bdbdbd";
      }
  }



  

}

