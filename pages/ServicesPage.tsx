import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

// Using inline SVGs for icons
const icons = {
  prenatal: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>,
  delivery: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
  infertility: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>,
  hormonal: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>,
  contraception: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.789-2.756 9.356-1.406 2.08-1.564 4.642-1.06 6.862M12 11c0-3.517 1.009-6.789 2.756-9.356 1.406-2.08 1.564-4.642 1.06-6.862m-1.12 18.218c-2.08-1.406-4.642-1.564-6.862-1.06C3.21 16.244 2 13.99 2 11.5 2 8.08 4.642 5.062 8.062 3.938c2.4-.8 4.962-.642 6.862 1.06M12 11v11"></path></svg>,
  laparoscopy: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536l12.232-12.232z"></path></svg>,
};

export const servicesData = [
  { title: 'Antenatal & Prenatal Care', description: 'Comprehensive care and monitoring throughout your pregnancy journey.', icon: icons.prenatal },
  { title: 'Normal & Cesarean Delivery', description: 'Expert management of labor and delivery, ensuring safety for mother and baby.', icon: icons.delivery },
  { title: 'Infertility Counseling', description: 'Personalized evaluation and treatment plans to help you achieve your dream of parenthood.', icon: icons.infertility },
  { title: 'Menstrual & Hormonal Disorders', description: 'Diagnosis and management of conditions like PCOS, endometriosis, and fibroids.', icon: icons.hormonal },
  { title: 'Family Planning & Contraception', description: 'Confidential advice and options to help you make informed decisions about your reproductive health.', icon: icons.contraception },
  { title: 'Laparoscopic Gynecology', description: 'Minimally invasive surgical procedures for faster recovery and better outcomes.', icon: icons.laparoscopy },
];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-start text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="bg-brand-pink text-brand-primary rounded-full p-4 mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 mb-6 flex-grow">{description}</p>
    <Link to="/appointment" className="text-brand-primary font-semibold hover:text-pink-600 dark:hover:text-pink-400 transition-colors group">
      Book Now <span className="inline-block transform group-hover:translate-x-1 transition-transform">&rarr;</span>
    </Link>
  </div>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200">Our Healthcare Services</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-3xl mx-auto">Providing a full spectrum of gynecological and obstetric care with a focus on your well-being.</p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServicesPage;