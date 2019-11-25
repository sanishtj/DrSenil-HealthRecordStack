import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hrs-validation-message',
  templateUrl: './hrs-validation-message.component.html',
  styleUrls: ['./hrs-validation-message.component.scss']
})
export class HrsValidationMessageComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
