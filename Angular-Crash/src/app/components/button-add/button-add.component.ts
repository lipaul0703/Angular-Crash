import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {
  @Input() color?: string;
  @Input() text?: string;
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.btnClick.emit();
  }
}
