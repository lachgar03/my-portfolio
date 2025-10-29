import { useLanguage } from '../hooks/useLanguage';
import { Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
      <h2 className="text-xl md:text-2xl text-text-secondary-light dark:text-text-secondary-dark mb-2">
        {t('hero.greeting')}
      </h2>
      <h1 className="text-5xl md:text-7xl font-extrabold text-text-light dark:text-text-dark mb-4">
        {t('hero.name')}
      </h1>
      <h3 className="text-2xl md:text-3xl font-medium text-primary-light dark:text-primary-dark mb-8">
        {t('hero.title')}
      </h3>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark mb-10">
        {t('hero.subtitle')}
      </p>
      
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <a
          href="/CV_LACHGAR_MOHAMED.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:opacity-80 transition-opacity"
        >
          <Download size={20} />
          {t('hero.cvButton')}
        </a>
        <a
          href="https://www.linkedin.com/in/lachgar-mohamed-8ab492310"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark font-semibold rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a
          href="https://github.com/lachgar03"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark font-semibold rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
          GitHub
        </a>
      </div>
    </section>
  );
}
