import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {AppState} from 'src/app/state/app.state';
import {FetchPatients} from '../state/patient.actions';
import * as fromPatients from '../state';
import {Observable} from 'rxjs';
import {Patientinfo} from 'src/app/models/patientinfo';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Patientsearch} from 'src/app/models/patientsearch';

@Component({selector: 'hrs-patient-list', templateUrl: './patient-list.component.html', styleUrls: ['./patient-list.component.css']})
export class PatientListComponent implements OnInit {
    patients$ : Observable < Patientinfo[] >;
    total$ : Observable < number >;
    pageNumber : number;
    pageSize : number;
    errorMessage$ : Observable < string >;

    searchForm : FormGroup;

    constructor(private store : Store < fromPatients.State >, private formBuilder : FormBuilder) {
        this.searchForm = this.formBuilder.group({
            name: [
                null, []
            ],
            mobile: [
                null, []
            ],
            email: [null, []]
        });

    }

    ngOnInit() {
        this.pageNumber = 1;
        this.pageSize = 2;
        let ps: Patientsearch = {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize
        };

        this.store.dispatch(new FetchPatients(ps));
        this.patients$ = this.store.pipe(select(fromPatients.getPatients));
        this.errorMessage$ = this.store.pipe(select(fromPatients.getError));
    }

    get name() {
        return this.searchForm.get('name');
    }

    get mobile() {
        return this.searchForm.get('mobile');
    }

    get email() {
        return this.searchForm.get('email');
    }

    searchPatients() {
        console.log(this.name.value);
        console.log(this.mobile.value);
        console.log(this.email.value);
    }

    onPageChanged(pageInfo){
     
    }

}
