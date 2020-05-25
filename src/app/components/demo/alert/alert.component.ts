import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../demo6/services/auth.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() status;

  @Output() answer: EventEmitter<boolean>;

  constructor() { 
    this.answer = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  yes() {
    this.answer.emit(true);
  }

  no() {
    this.answer.emit(false);
  }

}
