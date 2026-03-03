import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  fullName = 'Mykyta Mielkov';
  jobTitle = 'web developer & designer';
  email = 'nikitajohnson07.02@gmail.com';
  phone = '+49 151 25011494';
  location = 'Germani';
  isDark=true;

  ngOnInit(){
	const savedTheme = localStorage.getItem('theme');

	if(savedTheme === 'light'){
		this.isDark =false;
		document.body.classList.remove('dark-theme');
	}else {
		this.isDark = true;
		document.body.classList.add('dark-theme')
	}
  }

  toggleTheme(){
	this.isDark = !this.isDark;

	if(this.isDark){
		document.body.classList.add('dark-theme');
		localStorage.setItem('theme', 'dark');
	} else{
		document.body.classList.remove('dark-theme');
		localStorage.setItem('theme', 'light');
	}
  }
}


