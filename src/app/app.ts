import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { ContactComponent } from './components/contact/contact';
import { MenuComponent } from './components/menu/menu';
import { Home } from './components/home/home';
import { ServicesComponent } from './components/services/services';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { FooterComponent } from './components/footer/footer';
import { BackToTopComponent } from './components/back-to-top/back-to-top';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    Header,
    About,
    Experience,
    Skills,
    MenuComponent,
    Home,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('resume-mykyta-mielkov');
}
