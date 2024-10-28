import { Component, ElementRef, OnDestroy, OnInit, Renderer2  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import jQuery  from "jquery";

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css'
})
export class WhoWeAreComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  isListVisible: boolean[] = [false, false, false, false];

  toggleList(event: Event, index: number): void {
    // Toggle the specific list visibility
    this.isListVisible[index] = !this.isListVisible[index];
    event.stopPropagation();
  }

}
