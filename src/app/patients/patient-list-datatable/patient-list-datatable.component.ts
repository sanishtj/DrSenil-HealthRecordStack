import {Component, OnInit, Input} from '@angular/core';
import {Patientinfo} from 'src/app/models/patientinfo';
import {Router} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {SetCurrentPatient, DeletePatient} from '../state/patient.actions';
import {AppState} from 'src/app/state/app.state';
import * as fromPatients from '../state';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'hrs-patient-list-datatable', templateUrl: './patient-list-datatable.component.html', styleUrls: ['./patient-list-datatable.component.scss']})
export class PatientListDatatableComponent implements OnInit {
    @Input()patients : Patientinfo[];
    dtOptions : DataTables.Settings = {};

    selectedPatientId : string;

    constructor(private router : Router, private store : Store<AppState>, private modalService : NgbModal) {}

    ngOnInit(): void {
        const that = this;

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5
        };

        this.store.pipe(select(fromPatients.getCurrentPatient)).subscribe((patient : Patientinfo) => {
            if (patient && patient.Id) {
                this.selectedPatientId = patient.Id;
            }
        });
    }

    open(content) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            windowClass: 'modal-alert'
        }).result.then((result) => { // this.closeResult = `Closed with: ${result}`;
            console.log(result);
        }, (reason) => {
            console.log(reason);
            // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    SetCurrentPatient(patient : Patientinfo) {
        this.store.dispatch(new SetCurrentPatient(patient));
    }
    EditPatient(patient : Patientinfo) {
        this.SetCurrentPatient(patient);

        this.router.navigateByUrl('/patients/' + patient.Id + '/manage');
    }

    RemovePatient() {
        if (this.selectedPatientId) {
            this.store.dispatch(new DeletePatient(this.selectedPatientId));
            this.router.navigate(['patients']);
        }
    }

    AddConsultation(patient : Patientinfo) {
        this.SetCurrentPatient(patient);
        this.router.navigateByUrl('/patients/' + patient.Id + '/consultations/0/manage');
    }
}
