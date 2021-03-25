import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // emitting own events through event emitter
  // event emitter is a generic type so pass the type of object
  @Output() serverAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = 'Default Content';
  // passed argument is selector - also can pass any other component
  // ElementRef is an Angular component that gives access to Native Element
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  // emit would be required to generate a event with custom object
  onAddServer(inputElement: HTMLInputElement) {
    this.serverAdded.emit({
      serverName: inputElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(inputElement: HTMLInputElement) {
    // not recommended as it has other implications rather use other ways like interpolation and 2 way binding
    // this.serverContentInput.nativeElement.value = 'Something';
    this.bluePrintAdded.emit({
      serverName: inputElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
