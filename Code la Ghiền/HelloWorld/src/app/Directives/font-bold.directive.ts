import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFontBold]'
})
export class FontBoldDirective {

  constructor(private element: ElementRef, private render: Renderer2) {
    element.nativeElement.style.color = "red"
    render.setStyle(element.nativeElement, 'color', 'blue')
  }

}
