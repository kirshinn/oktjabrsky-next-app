"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation'; // Используйте useRouter из next/navigation

interface AuthContextType {
  isAuthenticated: boolean;
  user: any; // Замените на тип данных пользователя
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null); // Замените на тип пользователя
  const router = useRouter(); // Использование useRouter из next/navigation

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUser({}); // Установите реальные данные пользователя
    } else {
      router.push('/auth/login'); // Перенаправление на страницу логина
    }
  }, [router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
