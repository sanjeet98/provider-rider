import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'customer' | 'provider' | 'admin' | 'insurance';

interface UserContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  userName: string;
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('customer');
  const [userName, setUserName] = useState('John Doe');

  return (
    <UserContext.Provider value={{ role, setRole, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
