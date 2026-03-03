import { Directive, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]', 
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  
  ngAfterViewInit() {
    this.checkScroll();
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const elementVisible = window.innerHeight / 1.15;

    // Если верх элемента поднялся выше точки "видимости"
    if (rect.top < elementVisible) {
      this.renderer.addClass(this.el.nativeElement, 'revealed');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'revealed');
    }
  }
}