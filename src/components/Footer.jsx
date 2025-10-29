import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
