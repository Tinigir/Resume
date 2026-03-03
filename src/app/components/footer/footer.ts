import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IFooterLink {
  label: string;
  url: string;
}

interface ISocialLink {
  icon: string;
  url: string;
}

interface IContactItem {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();


  quickLinks: IFooterLink[] = [
    { label: 'home', url: '#home' },
    { label: 'about', url: '#about' },
    { label: 'portfolio', url: '#portfolio' },
    { label: 'contact', url: '#contact' },
  ];


  socialLinks: ISocialLink[] = [
    { icon: 'ri-whatsapp-line', url: 'https://api.whatsapp.com/send?phone=4915125011494' },
    // { icon: 'ri-twitter-line', url: '#' },
    { icon: 'ri-linkedin-line', url: 'https://www.linkedin.com/in/mykyta-mielkov-7b532b335/?locale=de_DE' },
    // { icon: 'ri-instagram-line', url: '#' },
  ];


  contactInfo: IContactItem[] = [
    { icon: 'ri-mail-send-line', text: 'nikitajohnson07.02@gmail.com' },
    { icon: 'ri-map-pin-line', text: 'Waren' },
  ];
}
