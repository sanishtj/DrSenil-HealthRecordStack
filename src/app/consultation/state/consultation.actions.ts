import { Action } from '@ngrx/store';
import { Consultation } from 'src/app/models/consultation';
import { Patientinfo } from 'src/app/models/patientinfo';


export enum ConsultationActionTypes {
    GETCURRENTPATIENT = '[Patient] GetCurrentPatient',
    GETCURRENTPATIENTSUCCESS = '[Patient] GetCurrentPatientSuccess',
    GETCURRENTPATIENTFAILURE = '[Patient] GetCurrentPatientFailure',
    SETCURRENTCONSULTATION = '[Consultation] SetCurrentConsultation',
    GETCURRENTCONSULTATION = '[Consultation] GetCurrentConsultation',
    CLEARCURRENTCONSULTATION = '[Consultation] ClearCurrentConsultation',
    INITIALIZECURRENTCONSULTATION = '[Consultation] InitializeCurrentConsultation',
    FETCHCONSULTATIONS = '[Consultation] FetchConsultations',
    FETCHCONSULTATIONSSUCCESS = '[Consultation] FetchConsultationsSuccess',
    FETCHCONSULTATIONSFAILURE = '[Consultation] FetchConsultationsFailiure',
    ADDCONSULTATION = '[Consultation] AddConsultation',
    ADDCONSULTATIONSUCCESS = '[Consultation] AddConsultationSuccess',
    ADDCONSULTATIONFAILURE = '[Consultation] AddConsultationFailiure',
    UPDATECONSULTATION = '[Consultation] UpdateConsultation',
    UPDATECONSULTATIONSUCCESS = '[Consultation] UpdateConsultationSuccess',
    UPDATECONSULTATIONFAILURE = '[Consultation] UpdateConsultationFailure',
    DELETECONSULTATION = '[Consultation] DeleteConsultation',
    DELETECONSULTATIONSUCCESS = '[Consultation] DeleteConsultationSuccess',
    DELETECONSULTATIONFAILURE = '[Consultation] DeleteConsultationFailure',
  }

  export class GetCurrentPatient implements Action {
    readonly type = ConsultationActionTypes.GETCURRENTPATIENT;
    constructor(public payload: string) { }
  }

  export class GetCurrentPatientSuccess implements Action {
    readonly type = ConsultationActionTypes.GETCURRENTPATIENTSUCCESS;
    constructor(public payload: Patientinfo) {}
  }
  
  export class GetCurrentPatientFailure implements Action {
    readonly type = ConsultationActionTypes.GETCURRENTPATIENTFAILURE;
    constructor(public payload: string) {}
  }

  export class GetCurrentConsultation implements Action {
    readonly type = ConsultationActionTypes.GETCURRENTCONSULTATION;
    constructor(public payload: string) { }
  }
  
  export class SetCurrentConsultation implements Action {
    readonly type = ConsultationActionTypes.SETCURRENTCONSULTATION;
    constructor(public payload: Consultation) { }
  }
  
  export class ClearCurrentConsultation implements Action {
    readonly type = ConsultationActionTypes.CLEARCURRENTCONSULTATION;
  }
  
  export class InitializeCurrentConsultation implements Action {
    readonly type = ConsultationActionTypes.INITIALIZECURRENTCONSULTATION;
  }
  
  export class FetchConsultations implements Action {
    readonly type = ConsultationActionTypes.FETCHCONSULTATIONS;
    constructor() {}
  }
  
  export class FetchConsultationsSuccess implements Action {
    readonly type = ConsultationActionTypes.FETCHCONSULTATIONSSUCCESS;
    constructor(public payload: Consultation[]) {}
  }
  
  export class FetchConsultationsFail implements Action {
    readonly type = ConsultationActionTypes.FETCHCONSULTATIONSFAILURE;
    constructor(public payload: string) {}
  }
  
  export class AddConsultation implements Action {
    readonly type = ConsultationActionTypes.ADDCONSULTATION;
    constructor(public payload: Consultation) {}
  }
  
  export class AddConsultationSuccess implements Action {
    readonly type = ConsultationActionTypes.ADDCONSULTATIONSUCCESS;
    constructor(public payload: Consultation) {}
  }
  
  export class AddConsultationFailiure implements Action {
    readonly type = ConsultationActionTypes.ADDCONSULTATIONFAILURE;
    constructor(public payload: string) {}
  }
  
  export class UpdateConsultation implements Action {
    readonly type = ConsultationActionTypes.UPDATECONSULTATION;
    constructor(public payload: Consultation) {}
  }
  
  export class UpdateConsultationSuccess implements Action {
    readonly type = ConsultationActionTypes.UPDATECONSULTATIONSUCCESS;
    constructor(public payload: Consultation) {}
  }
  
  export class UpdateConsultationFailiure implements Action {
    readonly type = ConsultationActionTypes.UPDATECONSULTATIONFAILURE;
    constructor(public payload: string) {}
  }
  
  export class DeleteConsultation implements Action {
    readonly type = ConsultationActionTypes.DELETECONSULTATION;
    constructor(public payload: string) { }
  }
  
  export class DeleteConsultationSuccess implements Action {
    readonly type = ConsultationActionTypes.DELETECONSULTATIONSUCCESS;
    constructor(public payload: string) { }
  }
  
  export class DeleteConsultationFail implements Action {
    readonly type = ConsultationActionTypes.DELETECONSULTATIONFAILURE;
    constructor(public payload: string) { }
  }
  
  export type ConsultationActions = GetCurrentPatient | GetCurrentPatientSuccess | GetCurrentPatientFailure | AddConsultation | AddConsultationSuccess | AddConsultationFailiure
  | FetchConsultations | FetchConsultationsSuccess | FetchConsultationsFail | SetCurrentConsultation |
  ClearCurrentConsultation | InitializeCurrentConsultation | UpdateConsultation | UpdateConsultationSuccess
  | UpdateConsultationFailiure | DeleteConsultation | DeleteConsultationSuccess | DeleteConsultationFail;
  
  
  
  