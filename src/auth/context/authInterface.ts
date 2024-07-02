export interface AuthContextType {
  isAuthenticated: boolean;
  login: (newUserName: string, NewUserPaswd: string) => void;
  logout: () => void;
  userName: string;
  userPassword: string;
}
