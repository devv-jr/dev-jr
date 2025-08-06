'use client';

import { useTranslations } from '../../hooks/useTranslations';

export default function Hero() {
  const { t } = useTranslations();

  return (
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
          <h1 className="text-foreground mb-5 font-bold leading-tight text-center ">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-muted-foreground mb-5 font-medium text-center">
            {t('hero.subtitle')}
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground mb-5 max-w-2xl mx-auto leading-relaxed text-center">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              className="btn btn-primary px-8 py-3 text-base font-medium min-w-[160px]"
            >
              {t('hero.cta.projects')}
            </a>
            <a 
              href="/contact" 
              className="btn btn-secondary px-8 py-3 text-base font-medium min-w-[160px]"
            >
              {t('hero.cta.contact')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="54" 
          height="54" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-muted-foreground"
        >
          <path d="M7 13l3 3 3-3m-3-4v7" />
        </svg>
      </div>
    </section>
  );
}