import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {

}
