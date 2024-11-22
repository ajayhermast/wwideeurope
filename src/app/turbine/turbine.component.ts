import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-turbine',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './turbine.component.html',
  styleUrl: '..//marketing/marketing.component.css'
})
export class TurbineComponent {

}
