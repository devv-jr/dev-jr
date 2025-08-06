'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Cambiar default a 'dark'
  const [resolvedTheme, setResolvedTheme] = useState('dark'); // Cambiar default a 'dark'
  const [mounted, setMounted] = useState(false); // Para evitar hidration mismatch

  // Marcar como montado después del primer render
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return; // No ejecutar en el servidor
    
    // Cargar tema guardado del localStorage
    const savedTheme = localStorage.getItem('dev-theme');
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
    } else {
      // Si no hay tema guardado, usar 'dark' como default
      setTheme('dark');
      localStorage.setItem('dev-theme', 'dark');
    }
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return; // No ejecutar en el servidor
    
    const updateResolvedTheme = () => {
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setResolvedTheme(systemTheme);
      } else {
        setResolvedTheme(theme);
      }
    };

    updateResolvedTheme();

    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateResolvedTheme);

    return () => mediaQuery.removeEventListener('change', updateResolvedTheme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return; // No ejecutar en el servidor
    
    // Aplicar el tema al documento
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    
    // También aplicar directamente al body para evitar flash
    document.body.className = document.body.className.replace(/\b(light|dark)\b/g, '');
    document.body.classList.add(resolvedTheme);
  }, [resolvedTheme, mounted]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('dev-theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  // Proporcionar un contexto con valores por defecto mientras se monta
  // para evitar el error y el flash de tema incorrecto.
  const contextValue = {
    theme,
    resolvedTheme,
    changeTheme,
    toggleTheme,
  };

  if (!mounted) {
    // Durante el renderizado en servidor o antes de la hidratación,
    // usamos un proveedor con valores por defecto para que los consumidores
    // no fallen, pero evitamos la funcionalidad completa hasta estar en el cliente.
    return (
      <ThemeContext.Provider value={{
        theme: 'dark',
        resolvedTheme: 'dark',
        changeTheme: () => console.log('Theme cannot be changed during SSR'),
        toggleTheme: () => console.log('Theme cannot be changed during SSR'),
      }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};