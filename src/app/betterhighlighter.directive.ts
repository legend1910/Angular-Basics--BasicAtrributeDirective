import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlighter]'
})
export class BetterhighlighterDirective implements OnInit {
@Input() defaultColor:string='transparent';
@Input() highlightColor:string='Yellow';

  @HostBinding('style.backgroundColor') background:string=this.defaultColor;
  constructor( private element:ElementRef, private render:Renderer2) { }
ngOnInit()
{
  // two way to change dom poperty is using render and another is using hostBinding
// this.render.setStyle(this.element.nativeElement,'backgroundColor','purple');
this.background=this.highlightColor;
}
@HostListener('mouseenter') mouseover(eventdata:Event)
{
 // this.render.setStyle(this.element.nativeElement,'backgroundColor','Yellow');
 this.background=this.highlightColor;
}
@HostListener('mouseleave') mouseleave(eventdata:Event)
{
//  this.render.setStyle(this.element.nativeElement,'backgroundColor','transparent');
this.background=this.defaultColor;
}
}