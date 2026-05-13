'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from '../../hooks/useTranslations';

export default function Hero() {
  const { t } = useTranslations();
  const heroRef = useRef(null);
  const posterRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Scroll parallax on hero CSS var
  useEffect(() => {
    const element = heroRef.current;
    if (!element) return;
    let rafId = 0;
    const update = () => {
      const rect = element.getBoundingClientRect();
      const progress = Math.min(Math.max(1 - rect.bottom / window.innerHeight, 0), 1);
      element.style.setProperty('--scroll-progress', progress.toFixed(3));
      rafId = 0;
    };
    const onScroll = () => { if (!rafId) rafId = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Mouse parallax on poster card with throttling
  useEffect(() => {
    const card = posterRef.current;
    if (!card) return;
    let lastTime = 0;
    const throttle = 16; // ~60fps
    const onMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttle) return;
      lastTime = now;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((e.clientY - cy) / rect.height) * 10;
      const ry = ((e.clientX - cx) / rect.width) * -10;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    };
    const onLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Staggered entrance
  useEffect(() => { setMounted(true); }, []);

  const tags = Array.isArray(t('hero.tags')) ? t('hero.tags') : [];
  const ticker = t('hero.ticker');

  const stagger = (i) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(28px)',
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${100 + i * 110}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${100 + i * 110}ms`,
  });

  return (
    <section id="hero" ref={heroRef} className="hero-v2">
      {/* Background layers */}
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-dust" />
        <div className="hero-scan" />
        <div className="hero-sun" />
      </div>

      {/* Ticker */}
      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>{ticker}</span>
          <span>{ticker}</span>
          <span>{ticker}</span>
        </div>
      </div>

      {/* Floating code decoration */}
      <div className="hero-code" aria-hidden="true">
        0101 // OUTLAW-TECH // 0xC0DE // MX-DEV
      </div>

      {/* Main content */}
      <div className="container hero-inner">
        {/* Left: text */}
        <div>
          <div style={stagger(0)}>
            <span className="badge">
              <span className="text-base">🇲🇽</span>
              {t('hero.kicker')}
            </span>
          </div>

          <h1 className="hero-title text-foreground mb-4 mt-5" style={stagger(1)}>
            {t('hero.title')}
          </h1>

          <p className="hero-subtitle mb-3" style={stagger(2)}>
            {t('hero.subtitle')}
          </p>

          <p className="hero-description mb-7" style={stagger(3)}>
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6" style={stagger(4)}>
            <a
              href="#projects"
              className="btn btn-primary px-8 py-3 text-base font-semibold min-w-[160px]"
            >
              {t('hero.cta.projects')}
            </a>
            <Link
              href="/contact"
              className="btn btn-secondary px-8 py-3 text-base font-medium min-w-[160px]"
            >
              {t('hero.cta.contact')}
            </Link>
          </div>

          <div className="hero-tags" style={stagger(5)}>
            {tags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: WANTED poster */}
        <div
          ref={posterRef}
          className="hero-poster"
          style={{
            ...stagger(2),
            transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) 350ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 350ms`,
          }}
        >
          {/* Aged paper texture overlay */}
          <div className="poster-noise" aria-hidden="true" />

          <div className="poster-title">{t('hero.poster.title')}</div>

          {/* Avatar placeholder — star badge */}
          <div className="poster-avatar" aria-label="Bruce Dev avatar">
            <div className="poster-avatar-inner">
              <span className="poster-star">✦</span>
              <span className="poster-initials">B.D</span>
            </div>
          </div>

          <div className="poster-name text-foreground">{t('hero.title')}</div>
          <div className="poster-reward">{t('hero.poster.reward')}</div>
          <div className="poster-detail">{t('hero.poster.detail')}</div>

          <div className="poster-footer">
            <span>{t('hero.poster.footer')}</span>
            <span className="flex items-center gap-1">
              <span>🇲🇽</span> México
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <span>{t('hero.scroll')}</span>
        <div className="scroll-indicator" />
      </div>
    </section>
  );
}