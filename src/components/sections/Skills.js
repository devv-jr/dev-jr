'use client';

import { useTranslations } from '../../hooks/useTranslations';
import Reveal from '../ui/Reveal';
import {
  siPython,
  siJavascript,
  siHtml5,
  siCss,
  siReact,
  siFlask,
  siFastapi,
  siNextdotjs,
  siGit,
  siGithub,
  siDocker,
  siNodedotjs,
  siVite,
  siExpo,
  siFirebase,
  siTailwindcss,
  siPnpm,
  siLinux,
} from 'simple-icons/icons';

const SKILL_ICON_MAP = {
  Python: siPython,
  JavaScript: siJavascript,
  HTML: siHtml5,
  CSS: siCss,
  'React JSX': siReact,
  'React Native': siReact,
  Flask: siFlask,
  FastAPI: siFastapi,
  'Next.js': siNextdotjs,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  'Node.js': siNodedotjs,
  Vite: siVite,
  'Expo Go': siExpo,
  Firebase: siFirebase,
  'TailwindCSS v4': siTailwindcss,
  'pnpm / npm': siPnpm,
  Linux: siLinux,
};

export default function Skills() {
  const { t } = useTranslations();
  const categories = Array.isArray(t('skills.categories')) ? t('skills.categories') : [];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container">
        <Reveal direction="up">
          <div className="mb-14">
            <p className="section-kicker mb-3">{t('skills.kicker')}</p>
            <h2 className="section-title text-foreground mb-4">{t('skills.title')}</h2>
            <p className="section-subtitle">{t('skills.subtitle')}</p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {categories.map((cat, catIndex) => (
            <Reveal key={cat.title} direction="up" delay={catIndex * 120}>
              <div className="skill-group">
                <div className="skill-group-header">
                  <h3 className="skill-group-title">{cat.title}</h3>
                </div>

                <div className="skill-list">
                  {cat.items?.map((item, itemIndex) => {
                    const icon = SKILL_ICON_MAP[item];

                    return (
                      <span
                        key={`${item}-${itemIndex}`}
                        className="skill-chip"
                        style={{
                          animationDelay: `${catIndex * 120 + itemIndex * 50}ms`,
                        }}
                      >
                        <span className="skill-chip-icon" aria-hidden="true">
                          {icon?.path ? (
                            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                              <path d={icon.path} />
                            </svg>
                          ) : (
                            <span className="skill-chip-fallback">•</span>
                          )}
                        </span>
                        <span className="skill-chip-label">{item}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
