import {Auth} from '../../shared/interfaces/signIn';

export interface AuthState {
  authData: Auth | null;
  authError: string;
}
