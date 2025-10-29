import { useLanguage } from '../hooks/useLanguage';

export default function Skills() {
  const { t } = useLanguage();
  const categories = t('skills.categories');

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('skills.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item}
                    className="bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
