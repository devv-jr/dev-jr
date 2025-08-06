'use client';

import Link from 'next/link';
import { useTranslations } from '../../hooks/useTranslations';
import Header from '@/components/layout/Header';

export default function ContactPage() {
  const { t } = useTranslations();

  return (
    <>
      <Header/>
      <section className="relative min-h-screen flex items-center justify-center section-padding bg-background">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20"></div>

        {/* Animated background dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container relative z-10">
        <div className="animate-fade-in">
          {/* Main title with responsive typography */}
          <h1 className="text-foreground mb-8 font-bold leading-tight text-center text-4xl md:text-5xl lg:text-6xl">
            {t('contactPage.title')}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-muted-foreground mb-8 font-medium text-center text-xl md:text-2xl">
            {t('contactPage.subtitle')}
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-center text-lg">
            {t('contactPage.description')}
          </p>

          {/* Contact Information */}
          <div className="max-w-md mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-6">
              
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Email</p>
                  <a 
                    href="mailto:devvvjr@protonmail.com" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    devvvjr@protonmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/dev-j/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    linkedin.com/in/dev-j/
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-primary"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">GitHub</p>
                  <a 
                    href="https://github.com/devv-jr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    github.com/devv-jr
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Back to home button */}
          <div className="flex justify-center mt-12">
            <Link 
              href="/" 
              className="btn btn-primary px-8 py-3 text-base font-medium min-w-[160px]"
            >
              {t('contactPage.backHome') || 'Volver al inicio'}
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
