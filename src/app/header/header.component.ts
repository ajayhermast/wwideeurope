import { DOCUMENT } from '@angular/common';
import { Component,HostListener,Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 ||     
    document.documentElement.scrollTop > 20) {
      document.getElementsByClassName('header')[0].classList.add('smallhead');
      document.getElementsByClassName('fadeInUp')[0].classList.add('animated');
      // document.getElementById('paragraph').classList.add('green');
    }else{
      document.getElementsByClassName('header')[0].classList.remove('smallhead');
    }
  }
  menuopen(){
    console.log("hjhhuhhh");
    document.getElementsByClassName('navigation')[0].classList.add('openMenu');
    }
    menuclose(){
    document.getElementsByClassName('navigation')[0].classList.remove('openMenu');
    }
 

}
