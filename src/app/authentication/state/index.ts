import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';


// Selector functions
const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const checkAuthenticationStatus = createSelector(
  getAuthFeatureState,
  state => state.isAuthenticated
);

// export const getMaskUserName = createSelector(
//   getUserFeatureState,
//   state => state.maskUserName
// );
