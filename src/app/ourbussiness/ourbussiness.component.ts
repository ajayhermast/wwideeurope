import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ourbussiness',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './ourbussiness.component.html',
  styleUrls: ['./ourbussiness.component.css','../marketing/marketing.component.css']
})
export class OurbussinessComponent {

}
