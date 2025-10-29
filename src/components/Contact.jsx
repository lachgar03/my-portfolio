import { useLanguage } from '../hooks/useLanguage';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: Mail, text: t('contact.email'), href: `mailto:${t('contact.email')}` },
    { icon: Phone, text: t('contact.phone'), href: `tel:${t('contact.phone')}` },
    { icon: MapPin, text: t('contact.location'), href: '#' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {t('contact.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg text-text-secondary-light dark:text-text-secondary-dark mb-12">
          {t('contact.description')}
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Informations de contact */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.href}
                className="flex items-center gap-4 group"
              >
                <item.icon size={24} className="text-primary-light dark:text-primary-dark" />
                <span className="text-lg group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">{item.text}</span>
              </a>
            ))}
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-semibold mb-4">{t('contact.socials')}</h4>
              <div className="flex items-center gap-6">
                <a href="https://github.com/lachgar03" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/lachgar-mohamed-8ab492310" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact (simple, sans backend) */}
          <form 
            action="https://formspree.io/f/mzzkggbj"
            method="POST" 
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">{t('contact.form.name')}</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded-lg bg-card-light dark:bg-card-dark border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">{t('contact.form.email')}</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-lg bg-card-light dark:bg-card-dark border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">{t('contact.form.message')}</label>
              <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border rounded-lg bg-card-light dark:bg-card-dark border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"></textarea>
            </div>
            <button 
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:opacity-80 transition-opacity"
            >
              <Send size={20} />
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
