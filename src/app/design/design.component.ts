import { Component,HostListener } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './design.component.html',
  styleUrl: '..//marketing/marketing.component.css'
})
export class DesignComponent {

}
