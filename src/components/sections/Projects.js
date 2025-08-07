'use client';

import { useTranslations } from '../../hooks/useTranslations';
import Image from 'next/image';

export default function Projects() {
    const { t } = useTranslations();
    
    return (
        <section id="projects" className="section-padding bg-background">
        <div className="container">
            <h2 className="text-foreground mb-5 font-bold text-center">
            {t('projects.title')}
            </h2>
            <p className="text-muted-foreground mb-10 text-center">
            {t('projects.description')}
            </p>

            {/* Los Proyectos van aqui */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example project item */}
            <div className="project-item bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-primary font-semibold mb-2">{t('projects.project1.title')}</h3>
                <Image 
                    src="/dev-jr/gainzimage1.jpg" 
                    alt={t('projects.project1.title')} 
                    width={300} 
                    height={200} 
                    className="mb-4 rounded-lg"
                />
                <p className="text-muted-foreground">{t('projects.project1.description')}</p>
            </div>
            {/* Repeat for more projects */}
            <div className="project-item bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-primary font-semibold mb-2">{t('projects.project2.title')}</h3>
                <Image 
                    src="/dev-jr/onklydemoimage.jpg" 
                    alt={t('projects.project2.title')} 
                    width={300} 
                    height={200} 
                    className="mb-4 rounded-lg"
                />
                <p className="text-muted-foreground">{t('projects.project2.description')}</p>
            </div>
            <div className="project-item bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-primary font-semibold mb-2">{t('projects.project3.title')}</h3>
                <Image 
                    src="/dev-jr/lauraimage.jpg" 
                    alt={t('projects.project3.title')} 
                    width={300} 
                    height={200} 
                    className="mb-4 rounded-lg"
                />
                <p className="text-muted-foreground">{t('projects.project3.description')}</p>
            </div>
        </div>
        </div>
        </section>
    );
}