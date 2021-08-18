import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive(
  {
    selector:'[appHighlight]'
  }
)
export class BasicHighlighter implements OnInit
{
 constructor(private element:ElementRef)
 {}

ngOnInit()
{
  //Note: It's not a good practice to directly acess your elements

this.element.nativeElement.style.backgroundColor='green';
}
}