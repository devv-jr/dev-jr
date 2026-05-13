'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslations } from '../../hooks/useTranslations';
import { useLanguage } from '../../contexts/LanguageContext';

const FLAG_MAP = { es: '🇲🇽', en: '🇺🇸' };
const LANG_LABEL = { es: 'Español', en: 'English' };

export default function Header() {
  const { toggleTheme, resolvedTheme } = useTheme();
  const { t } = useTranslations();
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '/#hero', label: t('nav.home') },
    { href: '/#projects', label: t('nav.projects') },
    { href: '/#about', label: t('nav.about') },
    { href: '/#skills', label: t('nav.skills') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'border-b border-transparent bg-transparent backdrop-blur-sm'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-sunset to-tech transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200"
          >
            <span className="font-mono text-xs text-primary opacity-60 group-hover:opacity-100 transition-opacity">{'>'}</span>
            <span className="font-display text-lg font-black tracking-tight uppercase">Bruce Dev</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block" aria-label="Navegación principal">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-accent/50 group"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle — Flag */}
            <button
              onClick={toggleLanguage}
              title={`Switch to ${language === 'es' ? 'English' : 'Español'}`}
              aria-label={`Cambiar idioma a ${LANG_LABEL[language === 'es' ? 'en' : 'es']}`}
              className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 text-sm"
            >
              <span className="text-base leading-none">{FLAG_MAP[language]}</span>
              <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {language.toUpperCase()}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Cambiar a modo ${resolvedTheme === 'light' ? 'oscuro' : 'claro'}`}
              className="p-2 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 text-muted-foreground hover:text-foreground"
            >
              {resolvedTheme === 'light' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg border border-border bg-card/50 hover:bg-accent/50 transition-all duration-200 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileMenuOpen}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-3 border-t border-border" aria-label="Menú móvil">
            <ul className="space-y-1 px-4 pb-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 py-2.5 px-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200 font-medium text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-mono text-primary text-xs">{'>'}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}