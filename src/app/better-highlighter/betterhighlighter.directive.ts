import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlighter]'
})
export class BetterhighlighterDirective implements OnInit {

  constructor( private element:ElementRef, private render:Renderer2) { }
ngOnInit()
{
  this.render.setStyle(this.element.nativeElement,'backgroundColor','purple');
}
}