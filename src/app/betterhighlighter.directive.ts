import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlighter]'
})
export class BetterhighlighterDirective implements OnInit {

  constructor( private element:ElementRef, private render:Renderer2) { }
ngOnInit()
{
  this.render.setStyle(this.element.nativeElement,'backgroundColor','purple');
}
@HostListener('mouseenter') mouseover(eventdata:Event)
{
  this.render.setStyle(this.element.nativeElement,'backgroundColor','Yellow');
}
@HostListener('mouseleave') mouseleave(eventdata:Event)
{
  this.render.setStyle(this.element.nativeElement,'backgroundColor','transparent');
}
}