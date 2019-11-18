import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hrs-form-group',
  templateUrl: './hrs-form-group.component.html',
  styleUrls: ['./hrs-form-group.component.scss']
})
export class HrsFormGroupComponent implements OnInit {
  @Input() controlname: string;
  @Input() controllabel: string;
  @Input() classstring: string;

  constructor() { }

  ngOnInit() {
  }

}
