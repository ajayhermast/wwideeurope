import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css','..//marketing/marketing.component.css']
})
export class ProjectsComponent {

}
