import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlighter]'
})
export class BetterhighlighterDirective implements OnInit {

  @HostBinding('style.backgroundColor') background:string='transparent';
  constructor( private element:ElementRef, private render:Renderer2) { }
ngOnInit()
{
  // two way to change dom poperty is using render and another is using hostBinding
// this.render.setStyle(this.element.nativeElement,'backgroundColor','purple');
this.background='blue';
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