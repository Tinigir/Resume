import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IService {
  title: string;
  icon: string;
  modalTitle: string;
  modalDesc: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss'],
})
export class ServicesComponent {
  activeModalIndex: number | null = null;
  services: IService[] = [
    {
      title: 'Frontend <br> Developer',
      icon: 'ri-code-line',
      modalTitle: 'Frontend Developer',
      modalDesc:
        'Creating high-performance web apps with React and Angular. I turn complex Figma designs into clean, production-ready code.',
      features: [
        'React & Angular Mastery: Developing robust Single Page Applications (SPA) with complex state management.',
        'Pixel-Perfect Implementation: Precise translation of Figma designs into responsive, fluid web interfaces.',
        'Modern JavaScript/ES6+: Writing clean, modular, and maintainable code for long-term project stability.',
        'Performance Optimization: Ensuring lightning-fast load times and seamless user experiences across all devices.',
      ],
    },
    {
      title: 'UI/UX <br> Designer',
      icon: 'ri-pages-line',
      modalTitle: 'UI/UX Designer',
      modalDesc:
        'Designing functional, component-based interfaces in Figma. I bridge the gap between creative design and technical implementation.',
      features: [
        'Design Systems: Building reusable component libraries in Figma for consistent and scalable products.',
        'Interactive Prototyping: Creating high-fidelity, clickable wireframes to validate user flows before coding.',
        'User-Centric Logic: Crafting seamless navigation and layouts focused on conversion and ease of use.',
        'Developer-Ready Handoff: Providing clean, structured design files optimized for React/Angular implementation.',
      ],
    },
    {
      title: 'Web  <br> Solutions',
      icon: 'ri-seo-line',
      modalTitle: 'Web Solutions',
      modalDesc:
        'Building end-to-end web products from architecture to deployment. I deliver scalable solutions tailored to business goals.',
      features: [
        'Custom Web Applications: Architecture and development of tailor-made platforms using React or Angular.',
        'API & Integration: Connecting frontend interfaces with RESTful APIs and third-party services for dynamic data.',
        'Scalable Architecture: Building modular systems that grow alongside your business needs and user base.',
        'Deployment & Maintenance: Full lifecycle support from local development to cloud hosting and performance monitoring.',
      ],
    },
  ];

  openModal(index: number) {
    this.activeModalIndex = index;
  }

  closeModal() {
    this.activeModalIndex = null;
  }
}
