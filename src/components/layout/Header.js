'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslations } from '../../hooks/useTranslations';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
  const { toggleTheme, resolvedTheme } = useTheme();
  const { t } = useTranslations();
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo/Title */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-200">
              Dev Jr
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Theme and Language toggles */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="btn btn-secondary text-sm px-3 py-2 focus-visible:focus"
              aria-label={`Cambiar idioma a ${language === 'es' ? 'inglés' : 'español'}`}
            >
              <span className="font-mono font-semibold">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-secondary p-2 focus-visible:focus"
              aria-label={`Cambiar a modo ${resolvedTheme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {resolvedTheme === 'light' ? (
                // Moon icon for dark mode
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden btn btn-secondary p-2"
              onClick={toggleMobileMenu}
              aria-label="Abrir menú de navegación"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile sidebar menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="py-4">
              <ul className="space-y-2 px-4">
                <li>
                  <Link 
                    href="/" 
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}