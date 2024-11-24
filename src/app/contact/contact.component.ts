import { Component,HostListener } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','..//marketing/marketing.component.css']
})
export class ContactComponent {
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
  ngAfterViewInit(): void {
    // Select all elements with the 'fadeInUp' class
    const elements = document.querySelectorAll('.fadeInUp');

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe each element
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
  
}
