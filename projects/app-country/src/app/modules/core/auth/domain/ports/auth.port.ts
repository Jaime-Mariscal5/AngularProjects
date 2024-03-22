import { Observable } from 'rxjs';

import { Auth } from '../auth';
import { AuthToken } from '../auth-token';
//import { AuthTokens } from '../auth-tokens';

export interface AuthPort {
  login(auth: Auth): Observable<AuthToken>;
  getNewAccessToken(refreshToken: string): Observable<any>;
}
