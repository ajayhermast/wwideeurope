import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sparepart',
  standalone: true,
  imports: [FooterComponent,HeaderComponent],
  templateUrl: './sparepart.component.html',
  styleUrl: '..//marketing/marketing.component.css'
})
export class SparepartComponent {

}
