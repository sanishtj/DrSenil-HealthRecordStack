import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComboboxItem } from 'src/app/models/combobox-item';

@Component({
  selector: 'hrs-examinations',
  templateUrl: './examinations.component.html',
  styleUrls: ['./examinations.component.css']
})
export class ExaminationsComponent implements OnInit {

  examinationsForm: FormGroup;

  private file: File | null = null;

  @HostListener('change', ['$event.target.files'])
  emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.file = file;
  }

  constructor(private formBuilder: FormBuilder, private host: ElementRef<HTMLInputElement>) {
    this.examinationsForm = this.formBuilder.group(
      {
        generalexaminations: this.formBuilder.group({
          bpsystolic: [null, []],
          bpdiastolic: [null, []],
          pulsefrom: [null, []],
          pulseto: [null, []],
          icterus: [false, []],
          pollar: [false, []],
          ln: [false, []],
          neurofibror: [false, []],
          skinpatch: [false, []],
        }),
        neurologicalexaminations: this.formBuilder.group({
          mmse: [null, []],
        }),
        behaviorexaminations: this.formBuilder.group({
          increasedrage: [false, []],
          behaviordescription: [null, []],
        }),
        cranialnerveexaminations: this.formBuilder.group({
          nerve1left: [null, []],
          nerver2left: [null, []],
          nerver346left: [null, []],
          nerver5left: [null, []],
          nerver7left: [null, []],
          nerver8left: [null, []],
          nerver910left: [null, []],
          nerver11left: [null, []],
          nerver12left: [null, []],
          nerve1right: [null, []],
          nerver2right: [null, []],
          nerver346right: [null, []],
          nerver5right: [null, []],
          nerver7right: [null, []],
          nerver8right: [null, []],
          nerver910right: [null, []],
          nerver11right: [null, []],
          nerver12right: [null, []],
        }),
        motorsystemexaminations: this.formBuilder.group({
          gait: [null, []],
          tone: [null, []],
          power: this.formBuilder.group({
            leftshoulder: [null, []],
            rightshoulder: [null, []],
            leftelbow: [null, []],
            rightelbow: [null, []],
            lefthandgrip: [null, []],
            righthandgrip: [null, []],
            leftlowerlimb: [null, []],
            rightlowerlimb: [null, []],
            lefthip: [null, []],
            righthip: [null, []],
            leftknee: [null, []],
            rightknee: [null, []],
            leftfoot: [null, []],
            rightfoot: [null, []],
            leftehi: [null, []],
            rightehi: [null, []],

          }),
          reflex: [null, []]
        }),
        sensorysystemexaminations: this.formBuilder.group({
          upperlimb: [null, []],
          upperlimbnote: [null, []],
          chest: [null, []],
          chestnote: [null, []],
          abdomen: [null, []],
          abdomennote: [null, []],
          lowerlimb: [null, []],
          lowerlimbnote: [null, []],
        }),
        cerebellarsystemexaminations: this.formBuilder.group({
          status: [null, []],
          vertigostatus: [false, []],
          vertigoleftnote: [null, []],
          vertigorightnote: [null, []],
          pastpointingstatus: [false, []],
          pastpointingleftnote: [null, []],
          pastpointingrightnote: [null, []],
          dysdiadochokinesiastatus: [false, []],
          dysdiadochokinesialeftnote: [null, []],
          dysdiadochokinesiarightnote: [null, []],
          nystagmusstatus: [false, []],
          nystagmusleftnote: [null, []],
          nystagmusrightnote: [null, []],
          skull: [null, []],
          spine: [null, []],
        }),
      });

  }

  ngOnInit() {
  }

  getHealthStatus(): Array<ComboboxItem> {
    return [{
      Key: 'Normal',
      Value: 'Normal'
    }, {
      Key: 'Abnormal',
      Value: 'Abnormal'
    }]
  }

  getToneTypes(): Array<ComboboxItem> {
    return [{
      Key: 'Hypo',
      Value: 'Hypo'
    }, {
      Key: 'Normal',
      Value: 'Normal'
    },
    {
      Key: 'Hyper',
      Value: 'Hyper'
    }]
  }

}
