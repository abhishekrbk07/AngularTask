import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  childCount = 0;
  @Input() parentCounter: number | undefined;
  @Output() childCounter = new EventEmitter<number>();

  constructor() {
    
  }

  ngOnInit(): void {}

  incrementParentCounter() {
    this.childCounter.emit(this.childCount++);
  }
}