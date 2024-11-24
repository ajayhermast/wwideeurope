import { Component, OnDestroy, OnInit ,HostListener,Inject,ViewChild, ElementRef} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landinngpage',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './landinngpage.component.html',
  styleUrls: ['./landinngpage.component.css','../app.component.css']
})
export class LandinngpageComponent  implements OnInit,OnDestroy{
  private slides: HTMLCollectionOf<HTMLElement>;
  private indicator: HTMLElement | null;
  private dots: HTMLCollectionOf<HTMLElement>;
  private autoplay: string | null;
  private count: number = 0;
  private interval: number = 1000;
  private set: NodeJS.Timeout | undefined;

  activeElement: string = 'img1'; // Start with 'blair'
  intervalId: any;

  ngOnInit(): void {
    const images = [
      document.getElementById('img1'),
      document.getElementById('img2'),
      document.getElementById('img3'),
      document.getElementById('img4'),
    ];
    
    if (images.every(img => img)) {
      let currentIndex = 0; // Track the current image index
      const totalImages = images.length;
    
      setInterval(() => {
        // Remove 'show' class from all images
        images.forEach(img => {
          if (img) {
            img.classList.remove('show');
          }
        });
    
        // Add 'show' class to the current image
        const currentImage = images[currentIndex];
        if (currentImage) {
          currentImage.classList.add('show');
        }
    
        // Move to the next image index
        currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
      }, 3000); // Change image every 2 seconds
    }
    const slides = document.querySelectorAll<HTMLImageElement>('.slide');
    const totalSlides = slides.length;
    let curIndex = 0;
    
    const autoSlide = () => {
      // Move the current slide out of view
      slides[curIndex].classList.remove('active');
      slides[curIndex].classList.add('exiting');
    
      // Calculate the next slide index
      curIndex = (curIndex + 1) % totalSlides;
    
      // Move the next slide into view
      slides[curIndex].classList.remove('exiting');
      slides[curIndex].classList.add('active');
    };
    
    // Start auto-sliding every 1 second
    setInterval(autoSlide, 3000);

  }
  

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  constructor(@Inject(DOCUMENT) private document: Document) {
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



  // @ViewChild('fadeInElement') fadeInElement: ElementRef | undefined;
  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   if (this.isElementInViewport(this.fadeInElement?.nativeElement)) {
  //     this.fadeInElement?.nativeElement.classList.add('animated');
  //   }
  // }
  // private isElementInViewport(element: HTMLElement): boolean {
  //   if (!element) return false;
  //   const rect = element.getBoundingClientRect();
  //   return rect.top >= 0 && rect.bottom <= window.innerHeight;
  // }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Select all elements with the class 'contentToReveal'
    const elements = document.querySelectorAll('.fadeInUp');

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      // Check if the element is within the viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Add the 'visible' class if it’s not already present
        if (!element.classList.contains('animated')) {
          element.classList.add('animated');
        }
      }
    });
  }
  

}

