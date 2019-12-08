import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConsultations from './consultation.reducer';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.AppState {
  consultations: fromConsultations.ConsultationState;
}

//const fromConsultation = 
// Selector functions
const getConsultationFeatureState = createFeatureSelector<fromConsultations.ConsultationState>('consultations');

export const getPatientDetails = createSelector(
  getConsultationFeatureState,
  state => state.patientDetails
);

export const getcurrentConsultationId = createSelector(
  getConsultationFeatureState,
  state => state.currentConsultationId
);

export const getCurrentConsultation = createSelector(
  getConsultationFeatureState,
  getcurrentConsultationId,
  (state, currentConsultationId) => {

      if (currentConsultationId === '0' || currentConsultationId == null) {
          return {
              Id: null,
              FullName: '',
              DOB: new Date(),
              Mobile: '',
              Email: ''
          };
      } else {
          return currentConsultationId ? state.consultations.find(p => p.Id === currentConsultationId) : null;
      }
  }
);

export const getConsultations = createSelector(
  getConsultationFeatureState,
  state => state.consultations
);

export const getError = createSelector(
  getConsultationFeatureState,
  state => state.error
);
