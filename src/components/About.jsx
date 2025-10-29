import { useLanguage } from '../hooks/useLanguage';
import * as Icons from 'lucide-react';

// Fonction pour récupérer dynamiquement l'icône
const DynamicIcon = ({ name, ...props }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return <Icons.Activity {...props} />; // Icône par défaut
  return <IconComponent {...props} />;
};

export default function About() {
  const { t } = useLanguage();
  const bio = t('about.bio');
  const interests = t('about.interests');

  return (
    <section id="about" className="py-20 bg-card-light dark:bg-card-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-lg text-text-light dark:text-text-dark">
            {bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">{t('about.interestsTitle')}</h3>
            <ul className="space-y-3">
              {interests.map((interest) => (
                <li key={interest.name} className="flex items-center gap-3">
                  <DynamicIcon name={interest.icon} size={24} className="text-primary-light dark:text-primary-dark" />
                  <span className="text-lg">{interest.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
