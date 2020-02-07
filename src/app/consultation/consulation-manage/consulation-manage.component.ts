import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import * as fromConsultation from '../state';
import { Patientinfo } from 'src/app/models/patientinfo';
import { GetCurrentPatient } from '../state/consultation.actions';

@Component({
  selector: 'hrs-consulation-manage',
  templateUrl: './consulation-manage.component.html',
  styleUrls: ['./consulation-manage.component.css']
})
export class ConsulationManageComponent implements OnInit {
  private patientDetails: Patientinfo;
  private stepper: Stepper;
  private steps = [
    'patientdetails',
    'comorbidities',
    'examinations',
    'investigations',
    'diagnosis'
  ];

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  next(prevStep, nextStep) {
    this.stepper.next();

  }

  prev(currentStep, prevStep) {
    this.stepper.previous();
    const url = this.location.path().replace(currentStep, prevStep);
    this.location.go(url);
  }

  onSubmit() {
    return false;
  }

  handlePatientDetails() {
    
    let patientId = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(new GetCurrentPatient(patientId));
    this.store.pipe(select(fromConsultation.getPatientDetails)).subscribe((patientDetails: Patientinfo) => {
      this.patientDetails = patientDetails;
    })
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });

    document
      .querySelector('#stepper1')
      .addEventListener('show.bs-stepper', (event: any) => {
        const url = this.location
          .path()
          .replace(this.steps[event.detail.from], this.steps[event.detail.to]);
        this.location.go(url);
      });

    if (!this.route.snapshot.paramMap.get('step')) {
      this.location.go(this.location.path() + '/patientdetails');
      this.handlePatientDetails();
    } else {
      switch (this.route.snapshot.paramMap.get('step')) {
        case 'patientdetails':
          this.handlePatientDetails();
          this.stepper.to(1);
          break;
        case 'comorbidities':
          this.stepper.to(2);
          break;
        case 'examinations':
          this.stepper.to(3);
          break;
        case 'investigations':
          this.stepper.to(4);
          break;
        case 'diagnosis':
          this.stepper.to(5);
          break;
        default:
          break;
      }
    }
  }

  patientDetailsNextClick(patientdetails: any) {
    // Save data and get back the saved object with ID
    let cId = 1;
    this.next(patientdetails.from, patientdetails.to);
    let url = this.updateURL(patientdetails.from, patientdetails.to);
    
    if (url.indexOf('/0/') !== -1) {
      url = this.updateURL('/0/', `/${cId}/`);
      //this.location.go(url);
    }
  }

  updateURL(from: string, to: string): string {
    const url = this.location.path().replace(from, to);
    this.location.go(url);
    return url;
  }
}
