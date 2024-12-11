import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightcard]',
  standalone: true
})
export class HighlightcardDirective {
  @Input() hascolor:string="red"
  @Input('appHighlightcard') sor:string="orange"

  constructor(private ele:ElementRef) { 
    this.ele.nativeElement.style.backgroundColor =this.sor;
  }
  @HostListener('mouseover') over(){
    this.ele.nativeElement.style.backgroundColor =this.hascolor;
  }
  @HostListener('mouseout') out(){
    this.ele.nativeElement.style.backgroundColor ='pink';
  }
}
