'use client';

import { useTranslations } from '../../hooks/useTranslations';
import Reveal from '../ui/Reveal';

export default function Experience() {
  const { t } = useTranslations();
  const items = Array.isArray(t('experience.items')) ? t('experience.items') : [];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container">
        <Reveal>
          <div className="mb-10">
            <p className="section-kicker mb-3">{t('experience.kicker')}</p>
            <h2 className="section-title text-foreground mb-4">{t('experience.title')}</h2>
            <p className="section-subtitle">{t('experience.subtitle')}</p>
          </div>
        </Reveal>

        <div className="timeline">
          {items.map((item, index) => (
            <Reveal key={`${item.role}-${index}`} delay={index * 120}>
              <div className="timeline-item">
                <div className="panel">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-foreground text-lg font-semibold">{item.role}</h3>
                    <span className="chip">{item.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.summary}</p>
                  <div className="project-tags">
                    {item.tags?.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                 </div>
               </div>
             </Reveal>
           ))}
         </div>
       </div>
     </section>
   );
 }
