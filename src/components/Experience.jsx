import { useLanguage } from '../hooks/useLanguage';
import { Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();
  const jobs = t('experience.jobs');

  return (
    <section id="experience" className="py-20 bg-card-light dark:bg-card-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('experience.title')}
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

          {jobs.map((job, index) => (
            <div key={index} className="mb-12 flex items-center w-full">
              {/* Gauche ou Droite */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{job.period}</p>
                <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark mt-1">{job.role}</h3>
                <p className="text-md font-semibold">{job.company}</p>
                <p className={`text-sm text-text-secondary-light dark:text-text-secondary-dark flex items-center gap-1 mt-1 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <MapPin size={14} /> {job.location}
                </p>
                
                <ul className="mt-4 list-disc list-inside text-left text-text-light dark:text-text-dark">
                  {job.tasks.map((task, i) => (
                    <li key={i} className="text-sm mb-1">{task}</li>
                  ))}
                </ul>
                
                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {job.stack.map((tech) => (
                    <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Point central */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-primary-light dark:bg-primary-dark rounded-full border-4 border-background-light dark:border-background-dark z-10 flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>

              {/* Contenu vide pour l'autre côté */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
