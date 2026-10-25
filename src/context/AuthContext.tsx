'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppRole, Profile } from '@/types';
import { createClient } from '@/lib/supabase/client';

interface AuthUser {
  id: string;
  email: string;
  role: AppRole;
  profile: Profile;
}

interface AuthContextType {
  user: AuthUser | null;
  role: AppRole;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  login: (email: string, role?: AppRole) => Promise<boolean>;
  register: (name: string, email: string, phone: string, whatsapp?: string, address?: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updated: Partial<Profile>) => void;
  switchRole: (newRole: AppRole) => void;
}

const DEFAULT_ADMIN: AuthUser = {
  id: 'admin-super-1',
  email: 'admin@alkhalilpublishers.com',
  role: 'super_admin',
  profile: {
    id: 'admin-super-1',
    full_name: 'مدیر اعلیٰ (Super Admin)',
    phone: '03001234567',
    whatsapp: '03001234567',
    province: 'Punjab',
    city: 'لاہور',
    address: 'الخلیل پبلشرز، اردو بازار لاہور',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
};

const DEFAULT_CUSTOMER: AuthUser = {
  id: 'cust-demo-1',
  email: 'customer@example.com',
  role: 'customer',
  profile: {
    id: 'cust-demo-1',
    full_name: 'محمد عثمان غنی',
    phone: '03001234567',
    whatsapp: '03001234567',
    province: 'Punjab',
    city: 'لاہور',
    address: 'مکان نمبر 45، گلی نمبر 3، علامہ اقبال ٹاؤن، لاہور',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(DEFAULT_CUSTOMER);
  const [supabase, setSupabase] = useState<any>(null);

  useEffect(() => {
    const client = createClient();
    if (client) {
      setSupabase(client);
    }

    try {
      const saved = localStorage.getItem('ak_auth_user');
      if (saved) {
        setUser(JSON.parse(saved));
      } else {
        setUser(DEFAULT_CUSTOMER);
      }
    } catch (e) {
      console.warn('Auth local storage load error', e);
    }
  }, []);

  const saveUser = (u: AuthUser | null) => {
    setUser(u);
    if (u) {
      localStorage.setItem('ak_auth_user', JSON.stringify(u));
    } else {
      localStorage.removeItem('ak_auth_user');
    }
  };

  const login = async (email: string, requestedRole: AppRole = 'customer') => {
    if (email.includes('admin')) {
      saveUser(DEFAULT_ADMIN);
      return true;
    }
    const newUser: AuthUser = {
      ...DEFAULT_CUSTOMER,
      email,
      role: requestedRole,
    };
    saveUser(newUser);
    return true;
  };

  const register = async (
    name: string,
    email: string,
    phone: string,
    whatsapp?: string,
    address?: string
  ) => {
    const newUser: AuthUser = {
      id: `cust-${Date.now()}`,
      email,
      role: 'customer',
      profile: {
        id: `cust-${Date.now()}`,
        full_name: name,
        phone,
        whatsapp: whatsapp || phone,
        province: 'Punjab',
        city: 'لاہور',
        address: address || '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    };
    saveUser(newUser);
    return true;
  };

  const logout = () => {
    saveUser(null);
  };

  const updateProfile = (updated: Partial<Profile>) => {
    if (!user) return;
    const updatedUser: AuthUser = {
      ...user,
      profile: {
        ...user.profile,
        ...updated,
        updated_at: new Date().toISOString(),
      },
    };
    saveUser(updatedUser);
  };

  const switchRole = (newRole: AppRole) => {
    if (!user) return;
    const updatedUser: AuthUser = {
      ...user,
      role: newRole,
    };
    saveUser(updatedUser);
  };

  const role = user?.role || 'customer';
  const isAuthenticated = !!user;
  const isAdmin = role === 'super_admin' || role === 'inventory_manager' || role === 'order_manager';
  const isSuperAdmin = role === 'super_admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isAuthenticated,
        isAdmin,
        isSuperAdmin,
        login,
        register,
        logout,
        updateProfile,
        switchRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
