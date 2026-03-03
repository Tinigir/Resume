import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IProject {
  id: number;
  category: string;
  img: string;
  year: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('timelineContainer') timelineContainer!: ElementRef;

  
  currentFilter: string = 'all';

  
  categories = [
    { key: 'all', label: 'All' },
    { key: 'react', label: 'React' },
    { key: 'angular', label: 'Angular' },
    { key: 'ui-ux', label: 'UI/UX' },
  ];

  projects: IProject[] = [
    {
      id: 1,
      category: 'react',
      img: 'assets/img/project-1.jpg',
      year: 2020,
      title: 'Design Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 2,
      category: 'angular',
      img: 'assets/img/project-2.jpg',
      year: 2021,
      title: 'Development Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 3,
      category: 'ui-ux',
      img: 'assets/img/project-3.jpg',
      year: 2022,
      title: 'UI/UX Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 4,
      category: 'react',
      img: 'assets/img/project-1.jpg',
      year: 2023,
      title: 'Design Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 5,
      category: 'angular',
      img: 'assets/img/project-2.jpg',
      year: 2024,
      title: 'Development Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      id: 6,
      category: 'ui-ux',
      img: 'assets/img/project-3.jpg',
      year: 2025,
      title: 'UI/UX Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
  ];

  ngAfterViewInit() {}

  // Метод фильтрации
  setFilter(category: string) {
    this.currentFilter = category;

    if (this.timelineContainer) {
      this.timelineContainer.nativeElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  isActive(projectCategory: string): boolean {
    return this.currentFilter === 'all' || this.currentFilter === projectCategory;
  }
}
