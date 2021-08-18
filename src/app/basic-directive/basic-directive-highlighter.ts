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
this.element.nativeElement.style.backgroundColor='green';
}
}