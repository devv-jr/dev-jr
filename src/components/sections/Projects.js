'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import Reveal from '../ui/Reveal';

const PROJECT_IMAGES = [
  '/gainz_cover.png',
  '/arkyne_guard_cover.png',
  '/arkyn_cover.png',
  '/onkly_cover.png',
];

const TAG_COLORS = {
  'React Native': 'tag-cyan',
  'Expo': 'tag-blue',
  'FastAPI': 'tag-green',
  'Firebase': 'tag-amber',
  'Python': 'tag-blue',
  'Ollama': 'tag-purple',
  'Rich': 'tag-green',
  'CLI': 'tag-amber',
  'Arch Linux': 'tag-cyan',
  'KDE Plasma': 'tag-blue',
  'Shell Scripting': 'tag-green',
  'Sistemas': 'tag-purple',
  'Next.js': 'tag-default',
  'TailwindCSS v4': 'tag-cyan',
  'Dashboard': 'tag-blue',
  'Auth': 'tag-amber',
};

function ProjectCard({ project, image, index }) {
  const cardRef = useRef(null);

  // 3D tilt effect with throttling
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    let lastTime = 0;
    const throttle = 16; // ~60fps
    const onMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttle) return;
      lastTime = now;
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
      card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
      card.style.boxShadow = `${-x * 1.2}px ${y * 1.2}px 40px -10px rgba(0,0,0,0.5), 0 20px 40px -20px var(--shadow)`;
    };
    const onLeave = () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <Reveal delay={index * 100} direction="up">
      <article
        ref={cardRef}
        className="project-card"
        style={{ transition: 'transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease' }}
      >
        {/* Image with clip-path reveal on hover */}
        <div className="project-image">
          <Image
            src={image}
            alt={`${project.title} — preview`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            priority={index < 2}
            className="object-cover"
          />
          {/* Number badge */}
          <div className="project-number">
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="project-body">
          <h3 className="text-foreground text-xl font-black uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="project-tags">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className={`chip ${TAG_COLORS[tag] || 'tag-default'}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const { t } = useTranslations();
  const projects = Array.isArray(t('projects.items')) ? t('projects.items') : [];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container">
        <Reveal direction="up">
          <div className="mb-14 text-center">
            <p className="section-kicker mb-3">{t('projects.kicker')}</p>
            <h2 className="section-title text-foreground mb-4">{t('projects.title')}</h2>
            <p className="section-subtitle mx-auto">{t('projects.description')}</p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              image={PROJECT_IMAGES[index] ?? PROJECT_IMAGES[0]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}