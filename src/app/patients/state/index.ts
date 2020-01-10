import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPatients from './patient.reducer';
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.AppState {
  patients: fromPatients.PatientState;
}
// Selector functions
const getPatientFeatureState = createFeatureSelector<fromPatients.PatientState>('patients');

export const getcurrentPatientId = createSelector(
  getPatientFeatureState,
  state => state.currentPatientId
);

export const getCurrentPatient = createSelector(
  getPatientFeatureState,
  getcurrentPatientId,
  (state, currentPatientId) => {

      if (currentPatientId === '0' || currentPatientId == null) {
          return {
              Id: null,
              FullName: '',
              age: 0,
              Mobile: '',
              Email: ''
          };
      } else {
          return currentPatientId ? state.patients.find(p => p.Id === currentPatientId) : null;
      }
  }
);

export const getPatients = createSelector(
  getPatientFeatureState,
  state => state.patients
);

export const getError = createSelector(
  getPatientFeatureState,
  state => state.error
);
