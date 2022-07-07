import { createContext, useContext } from 'react';

import { IUser } from '@/doodle/types/User';

interface IUserContext {
  user: IUser | null;
}

export const UserContext = createContext<IUserContext>(null);

export const useUser = () => useContext<IUserContext>(UserContext);
