import { Consultation } from 'src/app/models/consultation';
import { ConsultationActionTypes, ConsultationActions } from './consultation.actions';
import { Patientinfo } from 'src/app/models/patientinfo';


export interface ConsultationState {
    consultations: Consultation[];
    currentConsultationId: string | null;
    patientDetails: Patientinfo;
    error: string;
  }
  
  
  const initialState: ConsultationState = {
    consultations: [],
    currentConsultationId: null,
    patientDetails: null,
    error: ''
  };

  export function reducer(state = initialState, action: ConsultationActions): ConsultationState {
    switch (action.type) {
      case ConsultationActionTypes.GETCURRENTPATIENTSUCCESS:
        return {
          ...state,
          patientDetails: action.payload,
          error: ''
        };
        case ConsultationActionTypes.GETCURRENTPATIENTFAILURE:
        return {
          ...state,
          error: action.payload
        };
      case ConsultationActionTypes.SETCURRENTCONSULTATION:
        return {
          ...state,
          currentConsultationId: action.payload.ConsultationId
        };
  
      case ConsultationActionTypes.CLEARCURRENTCONSULTATION:
        return {
          ...state,
          currentConsultationId: null
        };
  
      case ConsultationActionTypes.INITIALIZECURRENTCONSULTATION:
        return {
          ...state,
          currentConsultationId: '0'
        };
      case ConsultationActionTypes.FETCHCONSULTATIONSSUCCESS:
        return {
          ...state,
          consultations: action.payload,
          error: ''
        };
        case ConsultationActionTypes.FETCHCONSULTATIONSFAILURE:
        return {
          ...state,
          error: action.payload
        };
      case ConsultationActionTypes.ADDCONSULTATIONSUCCESS:
        return {
          ...state,
          consultations: [...state.consultations, action.payload],
          currentConsultationId: action.payload.ConsultationId,
          error: ''
        };
        case ConsultationActionTypes.ADDCONSULTATIONFAILURE:
        return {
          ...state,
          error: action.payload
        };
        case ConsultationActionTypes.UPDATECONSULTATIONSUCCESS:
        const updatedConsultations = state.consultations.map(
          item => action.payload.ConsultationId === item.ConsultationId ? action.payload : item);
        return {
          ...state,
          consultations: updatedConsultations,
          currentConsultationId: action.payload.ConsultationId,
          error: ''
        };
  
      case ConsultationActionTypes.UPDATECONSULTATIONFAILURE:
        return {
          ...state,
          error: action.payload
        };
        case ConsultationActionTypes.DELETECONSULTATIONSUCCESS:
        return {
          ...state,
          consultations: state.consultations.filter(consultation => consultation.ConsultationId !== action.payload),
          currentConsultationId: null,
          error: ''
        };
  
      case ConsultationActionTypes.DELETECONSULTATIONFAILURE:
        return {
          ...state,
          error: action.payload
        };
        default:
          return state;
      }
  
  }
  