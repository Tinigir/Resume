import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
	socials = [
		{ name: 'LinkedIn', icon: 'ri-linkedin-box-line', link: 'https://www.linkedin.com/in/mykyta-mielkov-7b532b335/?locale=de_DE' },
		{ name: 'Instagram', icon: 'ri-instagram-line', link: 'https://instagram.com/...' },
		{ name: 'GitHub', icon: 'ri-github-line', link: 'https://github.com/Tinigir' }
	  ];
	fullName = 'Mykyta Mielkov';
}
