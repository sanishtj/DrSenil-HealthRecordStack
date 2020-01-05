import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'hrs-investigations',
  templateUrl: './investigations.component.html',
  styleUrls: ['./investigations.component.css']
})
export class InvestigationsComponent implements OnInit {

  investigationsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.investigationsForm = this.formBuilder.group(
      {
        blood: this.formBuilder.group({
          hemoglobin: [null, []],
          esr: [null, []],
          fbs: [null, []],
          ppbs: [null, []],
          rbs: [null, []],
          urea: [null, []],
          creatine: [null, []],
          sodium: [null, []],
          potassium: [null, []],
          pt: [null, []],
          inr: [null, []],
          prolactine: [null, []],
          cortisol: [null, []],
          thyroid:this.formBuilder.group({
            hasthyroid: [false, []],
            t3: [null, []],
            t4: [null, []],
            tsh: [null, []],
          }),
        }),
        xray: this.formBuilder.group({
          note:[null, []],
          xrayimage:[null, []],
        }),
        scans: this.formBuilder.group({
          ctscan: [null, []],
          mri: [null, []],
        })       
      });

  }


  ngOnInit() {
  }

}
