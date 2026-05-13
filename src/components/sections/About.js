'use client';

import { useTranslations } from '../../hooks/useTranslations';
import Reveal from '../ui/Reveal';

export default function About() {
  const { t } = useTranslations();
  const paragraphs = Array.isArray(t('about.paragraphs')) ? t('about.paragraphs') : [];
  const highlights = Array.isArray(t('about.highlights')) ? t('about.highlights') : [];

  const highlightIcons = ['⚡', '🗂️', '🤠'];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        {/* Header */}
        <Reveal direction="up">
          <div className="mb-14">
            <p className="section-kicker mb-3">{t('about.kicker')}</p>
            <h2 className="section-title text-foreground mb-4">{t('about.title')}</h2>
            <p className="section-subtitle">{t('about.subtitle')}</p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* Left — bio text */}
          <div className="space-y-6">
            {paragraphs.map((text, i) => (
              <Reveal key={i} direction="left" delay={i * 120}>
                <p className="text-foreground/80 text-lg leading-relaxed border-l-2 border-primary/40 pl-5">
                  {text}
                </p>
              </Reveal>
            ))}

            {/* Location pill */}
            <Reveal direction="left" delay={280}>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-2xl">🇲🇽</span>
                <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                  México · Full-stack · Web & Mobile
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — highlights */}
          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} direction="right" delay={i * 100}>
                <div className="about-highlight-card group">
                  <div className="about-highlight-icon">
                    {highlightIcons[i] ?? '✦'}
                  </div>
                  <div>
                    <h3 className="text-foreground font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
