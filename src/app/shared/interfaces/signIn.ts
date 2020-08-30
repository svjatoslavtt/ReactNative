export interface User {
  photo: string | null;
  email: string;
  name: string | null;
}

export interface Auth {
  idToken: string | null;
  user: User;
}
