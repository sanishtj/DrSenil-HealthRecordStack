import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hrs-button',
  templateUrl: './hrs-button.component.html',
  styleUrls: ['./hrs-button.component.scss']
})
export class HrsButtonComponent implements OnInit {
  @Input() id: string;
  @Input() type: string;
  @Input() classes: string;
  @Input() text: string;
  @Input() disabled: boolean;


  constructor() { }

  ngOnInit() {
  }

}
