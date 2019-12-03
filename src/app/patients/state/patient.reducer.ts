
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
    case PatientActionTypes.SETCURRENTPATIENT:
      return {
        ...state,
        currentPatientId: action.payload.Id
      };

    case PatientActionTypes.CLEARCURRENTPATIENT:
      return {
        ...state,
        currentPatientId: null
      };

    case PatientActionTypes.INITIALIZECURRENTPATIENT:
      return {
        ...state,
        currentPatientId: '0'
      };
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
      case PatientActionTypes.UPDATEPATIENTSUCCESS:
      const updatedPatients = state.patients.map(
        item => action.payload.Id === item.Id ? action.payload : item);
      return {
        ...state,
        patients: updatedPatients,
        currentPatientId: action.payload.Id,
        error: ''
      };

    case PatientActionTypes.UPDATEPATIENTFAILURE:
      return {
        ...state,
        error: action.payload
      };
      case PatientActionTypes.DELETEPATIENTSUCCESS:
      return {
        ...state,
        patients: state.patients.filter(patient => patient.Id !== action.payload),
        currentPatientId: null,
        error: ''
      };

    case PatientActionTypes.DELETEPATIENTFAILURE:
      return {
        ...state,
        error: action.payload
      };
      default:
        return state;
    }

}
