import type { CallbacksOptions, PagesOptions, SessionOptions } from "next-auth";
import type { Provider } from "next-auth/providers";

export interface MyNextAuthConfig {
  providers: Provider[];
  callbacks?: Partial<CallbacksOptions>;
  pages?: Partial<PagesOptions>;
  session?: Partial<SessionOptions>;
  secret?: string;
}

export interface ExtendedToken extends JWT {
  accessToken?: string;
  user?: IUser;
}

export interface ExtendedSession extends DefaultSession {
  accessToken?: string;
  user?: IUser;
}

export interface ExtendedAccount {
  provider: string;
  type: string;
  id?: string;
  access_token?: string;
  refresh_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
}
