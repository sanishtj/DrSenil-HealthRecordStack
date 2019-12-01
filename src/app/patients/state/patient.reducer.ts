
import { Patientinfo } from 'src/app/models/patientinfo';
import { PatientActionTypes, PatientActions } from './patient.actions';

export interface PatientState {
  patients: Patientinfo[];
  currentPatientId: string | null;
  error: string;
}


const initialState: PatientState = {
  patients: [],
  currentPatientId: null,
  error: ''
};

export function reducer(state = initialState, action: PatientActions): PatientState {
  switch (action.type) {
    case PatientActionTypes.FETCHPATIENTSSUCCESS:
      return {
        ...state,
        patients: action.payload,
        error: ''
      };
      case PatientActionTypes.FETCHPATIENTSFAILURE:
      return {
        ...state,
        error: action.payload
      };
    case PatientActionTypes.ADDPATIENTSUCCESS:
      return {
        ...state,
        patients: [...state.patients, action.payload],
        currentPatientId: action.payload.Id,
        error: ''
      };
      case PatientActionTypes.ADDPATIENTFAILURE:
      return {
        ...state,
        error: action.payload
      };
      default:
        return state;
    }

}
