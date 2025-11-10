import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { servicesData } from './ServicesPage'; // Re-use services data
import { motion } from 'framer-motion';

interface InfoCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ value, label, icon }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:-translate-y-2">
    <div className="bg-brand-pink text-brand-primary rounded-full p-4 mb-4">
      {icon}
    </div>
    <span className="text-3xl font-bold text-brand-secondary">{value}</span>
    <p className="text-gray-500 dark:text-gray-400 mt-1">{label}</p>
  </div>
);

const HomePage: React.FC = () => {
  const infoCards = [
    { value: '15+', label: 'Years Experience', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> },
    { value: '5000+', label: 'Happy Mothers', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> },
    { value: '1000+', label: 'Successful Surgeries', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg> },
    { value: '20k+', label: 'Consultations', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> },
  ];

  return (
    <div>
      <div
        className="relative w-full h-[75vh] md:h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://picsum.photos/seed/herobanner/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-start">
            <motion.div
                className="max-w-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
                    Compassionate Women’s Healthcare <br /> with Expertise & Care.
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>
                    Personalized and expert care for women at every stage of life, from maternity to wellness.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
                <Link to="/appointment" className="bg-brand-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 transition-all duration-300 shadow-lg transform hover:scale-105">
                    Book Appointment
                </Link>
                <Link to="/contact" className="bg-white/90 text-brand-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300 shadow-lg transform hover:scale-105">
                    Contact Now
                </Link>
            </motion.div>
        </div>
      </div>

      <AnimatedSection className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {infoCards.map((card, index) => (
              <InfoCard key={index} {...card} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-16 lg:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">About Dr. Neha Bhatnagar</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Dr. Neha Bhatnagar (MBBS, DGO) is a leading Gynecologist and Obstetrician at Haria L G Rotary Hospital, Vapi. She specializes in women’s health, high-risk pregnancy, infertility care, and laparoscopic procedures.</p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 italic border-l-4 border-brand-primary pl-4">“Every woman deserves trusted care at every stage of life.”</p>
                <Link to="/about" className="bg-brand-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-500 transition-all duration-300 shadow-md">
                    Learn More
                </Link>
            </div>
            <div className="order-1 lg:order-2">
                <img src="https://picsum.photos/seed/doctor/600/600" alt="Dr. Neha Bhatnagar" loading="lazy" className="rounded-full shadow-2xl dark:shadow-brand-primary/20 mx-auto w-3/4 lg:w-full" />
            </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 lg:py-24 bg-brand-pink/30 dark:bg-pink-900/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">We offer a comprehensive range of services to support women's health from adolescence to menopause and beyond.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.slice(0, 6).map((service, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2">
                        <div className="inline-block bg-brand-purple text-brand-secondary p-4 rounded-full mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{service.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
            <Link to="/services" className="mt-12 inline-block bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-500 transition-all duration-300 shadow-md">
                View All Services
            </Link>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default HomePage;