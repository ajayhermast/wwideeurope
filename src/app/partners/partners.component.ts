import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './partners.component.html',
  styleUrls: ['..//client/client.component.css','..//marketing/marketing.component.css']
})
export class PartnersComponent {

}
