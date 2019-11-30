import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPatients from './patient.reducer';


// Selector functions
const getPatientFeatureState = createFeatureSelector<fromPatients.PatientState>('patients');

export const getcurrentPatientId = createSelector(
  getPatientFeatureState,
  state => state.currentPatientId
);

export const getCurrentProduct = createSelector(
  getPatientFeatureState,
  getcurrentPatientId,
  (state, currentPatientId) => {
      if (currentPatientId === '0' || currentPatientId == null) {
          return {
              Id: null,
              FullName: '',
              DOB: new Date(),
              Mobile: '',
              Email: ''
          };
      } else {
          return currentPatientId ? state.patients.find(p => p.Id === currentPatientId) : null;
      }
  }
);

export const getPatient = createSelector(
  getPatientFeatureState,
  state => state.patients
);

export const getError = createSelector(
  getPatientFeatureState,
  state => state.error
);
