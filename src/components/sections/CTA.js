'use client';

import Link from 'next/link';
import { useTranslations } from '../../hooks/useTranslations';
import Reveal from '../ui/Reveal';

export default function CTA() {
  const { t } = useTranslations();

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container">
        <Reveal direction="scale">
          <div className="cta-panel">
            {/* Decorative elements */}
            <div className="cta-cross cta-cross-tl" aria-hidden="true">✦</div>
            <div className="cta-cross cta-cross-br" aria-hidden="true">✦</div>

            <div className="relative z-10 max-w-2xl">
              <p className="section-kicker mb-4">{t('cta.kicker')}</p>
              <h2 className="section-title text-foreground mb-5 leading-tight">
                {t('cta.title')}
              </h2>
              <p className="section-subtitle mb-8 text-lg">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary px-10 py-3.5 text-base font-semibold"
                >
                  {t('cta.primary')}
                </Link>
                <a
                  href="#projects"
                  className="btn btn-secondary px-10 py-3.5 text-base font-medium"
                >
                  {t('cta.secondary')}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
