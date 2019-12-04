import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'hrs-consulation-manage',
  templateUrl: './consulation-manage.component.html',
  styleUrls: ['./consulation-manage.component.css']
})
export class ConsulationManageComponent implements OnInit {
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
    private route: ActivatedRoute
  ) {}

  next(prevStep, nextStep) {
    this.stepper.next();
    const url = this.location.path().replace(prevStep, nextStep);
    this.location.go(url);
  }

  prev(currentStep, prevStep) {
    this.stepper.previous();
    const url = this.location.path().replace(currentStep, prevStep);
    this.location.go(url);
  }

  onSubmit() {
    return false;
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
    } else {
      switch (this.route.snapshot.paramMap.get('step')) {
        case 'patientdetails':
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
}
