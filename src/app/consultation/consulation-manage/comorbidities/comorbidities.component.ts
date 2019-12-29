import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComboboxItem } from 'src/app/models/combobox-item';

@Component({
  selector: 'hrs-comorbidities',
  templateUrl: './comorbidities.component.html',
  styleUrls: ['./comorbidities.component.css']
})
export class ComorbiditiesComponent implements OnInit {



  comorbiditiesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.comorbiditiesForm = this.formBuilder.group(
      {
        associatedcomorbidities: this.formBuilder.group({
          isdiabetic: [false, []],
          medicinetype: [null, []],
          medicinename: [null, []],
          iscopd: [false, []],
          isontreatment: [false, []],
          copdnote: [null, []],
          istb: [false, []],
          part: [null, []],
          // brain: [null, []],
          // spine: [null, []],
          // abdomen: [null, []],
          // chest: [null, []],
          ishormonalillness: [false, []],
          pituitary: [null, []],
          adrenal: [null, []],
          thyroid: [null, []]

        }),
        gynec: this.formBuilder.group({
          pregnancyhistory: [null, []],
          menstrualhistory: [null, []]
        }),
        personalhistory: this.formBuilder.group({
          alcohol: [null, []],
          smokepan: [null, []],
          drug: [null, []],
          allergy: [null, []]
        }),
        familyhistory: this.formBuilder.group({
          cancer: [null, []],
          diabetic: [null, []],
          bp: [null, []]
        }),
      }
    );

  }

  ngOnInit() {
  }

  get isdiabetic() {    
    return this.comorbiditiesForm.value.associatedcomorbidities.isdiabetic;
  }
  
  get medicinetype() {    
    return this.comorbiditiesForm.value.associatedcomorbidities.medicinetype;
  }

  addComorbidities() {

    console.log(this.isdiabetic);
    console.log(this.medicinetype);
  }

  getDiabeticMedicineTypes(): Array<ComboboxItem> {
    return [{
      Key: 'Insulin',
      Value: 'Insulin'
    }, {
      Key: 'AmylinomimeticDrug',
      Value: 'Amylinomimetic Drug'
    },]
  }

  getAlcoholConsumption(): Array<ComboboxItem> {
    return [{
      Key: 'OnceADay',
      Value: 'Once a Day'
    }, {
      Key: 'OnceaWeek',
      Value: 'Once a Week'
    },]
  }

  getSmokePanConsumption(): Array<ComboboxItem> {
    return [{
      Key: 'OnceADay',
      Value: 'Once a Day'
    }, {
      Key: 'OnceaWeek',
      Value: 'Once a Week'
    },]
  }

  getDrugConsumption(): Array<ComboboxItem> {
    return [{
      Key: 'OnceADay',
      Value: 'Once a Day'
    }, {
      Key: 'OnceaWeek',
      Value: 'Once a Week'
    },]
  }

  getTBParts(): Array<ComboboxItem> {
    return [{
      Key: 'Brain',
      Value: 'Brain'
    }, {
      Key: 'Spine',
      Value: 'Spine'
    },{
      Key: 'Abdomen',
      Value: 'Abdomen'
    },{
      Key: 'Chest',
      Value: 'Chest'
    },]
  }
}
