import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200">About Dr. Neha Bhatnagar</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">Your Trusted Partner in Women's Healthcare</p>
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <AnimatedSection className="lg:col-span-2" delay={0.3}>
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-brand-pink dark:bg-brand-primary/20 rounded-xl transform rotate-[-3deg]"></div>
                <img src="https://picsum.photos/seed/doctor-profile/800/1000" alt="Dr. Neha Bhatnagar" className="relative rounded-xl shadow-2xl w-full" />
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="lg:col-span-3" delay={0.4}>
            <h2 className="text-3xl font-bold text-brand-primary mb-4">MBBS, DGO</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Dr. Neha Bhatnagar is a distinguished Gynecologist and Obstetrician with a deep commitment to providing personalized and compassionate care to women. Serving at Haria L G Rotary Hospital in Vapi, she brings a wealth of experience and expertise in all aspects of women's reproductive health.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Her practice is built on a foundation of trust, empathy, and clinical excellence. She specializes in managing high-risk pregnancies, providing advanced infertility solutions, and performing minimally invasive laparoscopic surgeries. Dr. Bhatnagar is dedicated to empowering her patients with knowledge and supporting them through every stage of their life journey.
            </p>
            <div className="bg-brand-blue/30 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-brand-secondary">
              <p className="text-xl italic text-gray-700 dark:text-gray-300">“Every woman deserves trusted care at every stage of life. My goal is to be a supportive partner in your health, ensuring you feel heard, respected, and cared for.”</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;