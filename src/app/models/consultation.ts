import { Patientinfo } from './patientinfo';

export class Consultation {
    ConsultationId: string;
    PatientId: string;
    AdditionalPatientInfo: AdditionalPatientInfo
    Comorbidities : Comorbidities;
    Examinations : Examinations ;
    Investigations: Investigations;
    Diagnosis : Diagnosis;
}

export class AdditionalPatientInfo {
    PresentingComplaints: string;
    SignificantPastHistory: string;
}

export class Comorbidities {
    
}


export class Examinations {
    
}


export class Investigations {
   
}


export class Diagnosis {
   
}
