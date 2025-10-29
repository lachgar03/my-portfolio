import { useLanguage } from '../hooks/useLanguage';
import * as Icons from 'lucide-react';

const DynamicIcon = ({ name, ...props }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return <Icons.Award {...props} />;
  return <IconComponent {...props} />;
};

export default function Education() {
  const { t } = useLanguage();
  const educationItems = t('education.items');
  const certs = t('education.certs');

  return (
    <section id="education" className="py-20 bg-card-light dark:bg-card-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('education.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formation */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('education.educationTitle')}</h3>
            <div className="space-y-6">
              {educationItems.map((item) => (
                <div key={item.degree}>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{item.period}</p>
                  <h4 className="text-lg font-semibold mt-1">{item.degree}</h4>
                  <p className="text-md">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t('education.certsTitle')}</h3>
            <div className="space-y-6">
              {certs.map((cert) => (
                <div key={cert.name} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <DynamicIcon name={cert.icon} size={24} className="text-primary-light dark:text-primary-dark mt-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{cert.name}</h4>
                    <p className="text-md">{cert.issuer}</p>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
