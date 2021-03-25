import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // to change View Encapsulation - Emulated by default
  // none removes encapsulation allowing it to enter into other components
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // to pass some data from parent component to child
  // if name different then pass it within () of Input and the original one is lost
  @Input() element: { type: string, name: string, content: string };
  @Input() name: string;
  // In Angular 8, adding { static: true } with @ViewChild is needed if accessed within ngOnInit
  // If you DON'T access the selected element in ngOnInit, add { static: false } instead!
  // In Angular 9, you only need to add { static: true } but not { static: false }.
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('Constructor called');
  }

  // alone methods would do but better to add interface to check
  // only hook that receives parameter
  // triggered when there is any change in @Input elements
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Paragraph Content: ' + this.paragraph.nativeElement.textContent);

  }

  // twice as in development angular has extra change detection cycle
  // for every changes doCheck is called
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  // this is once that is called when the content is pushed
  // after content i.e. template is initialized the template reference can be accessed
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  // after view i.e. template is initialized the template reference can be accessed
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  // called when component is destroyed
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}
