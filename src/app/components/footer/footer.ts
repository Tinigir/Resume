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
    { icon: 'ri-whatsapp-line', url: '#' },
    { icon: 'ri-twitter-line', url: '#' },
    { icon: 'ri-linkedin-line', url: '#' },
    { icon: 'ri-instagram-line', url: '#' },
  ];


  contactInfo: IContactItem[] = [
    { icon: 'ri-mail-send-line', text: 'example@gmail.com' },
    { icon: 'ri-phone-line', text: '+1234567890' },
    { icon: 'ri-map-pin-line', text: 'your city, country' },
  ];
}
