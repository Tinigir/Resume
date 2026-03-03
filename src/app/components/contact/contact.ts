import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ScrollRevealDirective } from '../../directives/scroll-reveal'; 

interface IContactMethod {
  icon: string;
  title: string;
  data: string;
  link: string;
  actionText: string;
}

interface ISocialLink {
  icon: string;
  link: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {

  contactMethods: IContactMethod[] = [
    {
      icon: 'ri-mail-send-line',
      title: 'email',
      data: '',
      link: 'mailto:nikitajohnson07.02@gmail.com',
      actionText: 'send',
    },
    {
      icon: 'ri-messenger-line',
      title: 'messenger',
      data: '',
      link: 't.me/Tinigir',
      actionText: 'send',
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'whatsapp',
      data: '',
      link: 'https://wa.me/qr/BHC5BR3W3RBOH1',
      actionText: 'send',
    },
  ];

  //Данные соцсетей
  socialLinks: ISocialLink[] = [
    { icon: 'ri-facebook-line', link: 'https://www.facebook.com/nikita.melkov.9/' },
    { icon: 'ri-twitter-line', link: '#' },
    { icon: 'ri-linkedin-line', link: 'https://www.linkedin.com/in/mykyta-mielkov-7b532b335/' },
  ];

  //Логика отправки формы
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted!');
    alert('Message sent!');
  }
}
