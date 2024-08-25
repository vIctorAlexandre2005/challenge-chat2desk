import { User } from '@/@types/userData';
import { createContext } from 'react';

interface UserContextData {
  users: User[];
  loading: boolean;
  error: any;
}

export const UsersContext = createContext<UserContextData | undefined>(undefined);
