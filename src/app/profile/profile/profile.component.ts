import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBookMedical,faCut,faBrain  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'hrs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faLinkedin = faLinkedin;
  faBookMedical = faBookMedical;
  faCut = faCut;
  faBrain = faBrain;

  constructor(route: ActivatedRoute) {

    route.url.pipe(map(segments => segments.join(''))).subscribe(u => console.log(u));

   }

  ngOnInit() {
  }

}
