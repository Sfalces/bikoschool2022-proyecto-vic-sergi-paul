import React, { createContext, ReactNode, useState } from "react";
import { User } from "../domain/user";

interface ContextValue {
  user?: User;
  setUser: (user: User) => void;
}

interface Props {
  children: ReactNode;
}

export const UserContext = createContext<ContextValue>({
  user: undefined,
  setUser: (user) => {},
});

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
