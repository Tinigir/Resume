import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  name = 'Mykyta Mielkov';
  title = 'About me';
  link = 'https://www.linkedin.com/in/mykyta-mielkov-7b532b335/';
  email = 'nikitajohnson07.02@gmail.com';

  readonly birthDate = new Date(2000, 1, 7);

  get age(): number {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const monthDiff = today.getMonth() - this.birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff == 0 && today.getDate() < this.birthDate.getDate())) {
      age--;
    }
	return age
  }
}
