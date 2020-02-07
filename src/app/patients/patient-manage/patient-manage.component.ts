import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Patientinfo} from 'src/app/models/patientinfo';
import {emailFormatValidator} from 'src/app/shared/validations/emailformat.directive';
import {mobileFormatValidator} from 'src/app/shared/validations/mobileformat.directive';
import {Store, select} from '@ngrx/store';
import {AppState} from 'src/app/state/app.state';
import {AddPatient, UpdatePatient} from '../state/patient.actions';
import {Observable} from 'rxjs';
import * as fromPatients from '../state';
import {ComboboxItem} from 'src/app/models/combobox-item';
import {DropdownService} from 'src/app/services/dropdown.service';
import {SetCurrentPatient} from '../state/patient.actions';

@Component({selector: 'hrs-patient-manage', templateUrl: './patient-manage.component.html', styleUrls: ['./patient-manage.component.css']})
export class PatientManageComponent implements OnInit {
    patientInfoForm : FormGroup;
    selectedPatient : Patientinfo;
    patientInfo : Patientinfo = new Patientinfo();
    isEdit : boolean;

    constructor(private formBuilder : FormBuilder, private store : Store<AppState>, private route : ActivatedRoute, private router : Router, private dropdownService : DropdownService) {
        this.patientInfoForm = this.formBuilder.group({
            fullname: [
                this.patientInfo.FullName,
                [
                    Validators.required, Validators.pattern('[a-zA-Z ]*')
                ]
            ],
            age: [
                this.patientInfo.Age,
                [Validators.required]
            ],
            gender: [
                this.patientInfo.Gender,
                [Validators.required]
            ],
            mobile: [
                this.patientInfo.Mobile,
                [
                    Validators.required, mobileFormatValidator()
                ]
            ],
            email: [
                this.patientInfo.Email,
                [
                    Validators.required, emailFormatValidator()
                ]
            ]
        });
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const id: string = params.get('id');
            
            if (id != null && id !== "0") {
                this.isEdit = true;
                this.store.pipe(select(fromPatients.getCurrentPatient)).subscribe((patient : Patientinfo) => {
                    this.patientInfoForm.patchValue({fullname: patient.FullName, age: patient.Age, gender: patient.Gender, mobile: patient.Mobile, email: patient.Email});
                    this.patientInfoForm.updateValueAndValidity();
                });
            } else {
                this.store.dispatch(new SetCurrentPatient(new Patientinfo()));
                this.patientInfoForm.reset(this.patientInfoForm.value);
                this.isEdit = false;
            }
        });

    }

    onDateSelected(date : Date) {
        console.log(date);
    }

    addPatientAndContinue() {
        this.submitForm(true);
    }

    submitForm(isContinue : boolean) {
      
        if (this.patientInfoForm.status === 'VALID') {

            const payload = new Patientinfo();
            payload.FullName = this.fullname.value;
            payload.Age = this.age.value;
            payload.Gender = this.gender.value;
            payload.Mobile = this.mobile.value;
            payload.Email = this.email.value;
            
            if (!this.isEdit) {
                this.store.dispatch(new AddPatient(payload));
                if (isContinue) 
                    this.store.pipe(select(fromPatients.getCurrentPatient)).subscribe((patient : Patientinfo) => {

                        this.router.navigateByUrl(`/patients/${
                            patient.Id
                        }/consultations/0/manage`);
                    });
                
            } else {
                const id: string = this.route.snapshot.paramMap.get('id');
                payload.Id = id;
                this.store.dispatch(new UpdatePatient(payload));
                this.router.navigate(['patients']);
            }
        } else {
            Object.keys(this.patientInfoForm.controls).forEach(field => { // {1}
                const control = this.patientInfoForm.get(field); // {2}
                control.markAsTouched({onlySelf: true}); // {3}
            });
        }
    }

    addPatient() {
        this.submitForm(false);
    }

    updatePatient() {
      
        this.submitForm(false);
        
    }


    getGenders(): Array<ComboboxItem> {
        return this.dropdownService.getGenders();
    }

    get fullname() {
        return this.patientInfoForm.get('fullname');
    }

    get age() {
        return this.patientInfoForm.get('age');
    }

    get gender() {
        return this.patientInfoForm.get('gender');
    }

    get mobile() {
        return this.patientInfoForm.get('mobile');
    }

    get email() {
        return this.patientInfoForm.get('email');
    }
}
