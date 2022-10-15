import { Right } from '../../views/Permission/type';
import { User } from '../../views/User/type';

export interface AuthProviderValue {
  token: string | null;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  user: Partial<User>;
  rightTree: Right[];
  loading: boolean
}
