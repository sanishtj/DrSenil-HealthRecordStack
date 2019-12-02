import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hrs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(route: ActivatedRoute) {

    route.url.pipe(map(segments => segments.join(''))).subscribe(u => console.log(u));

   }

  ngOnInit() {
  }

}
