import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-6 text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50"
      >
        <span>{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const PatientGuidePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const guides = [
    {
      title: 'Maternity Care Instructions',
      content: (
        <>
          <p className="mb-2"><strong>Regular Check-ups:</strong> Please attend all scheduled antenatal appointments to monitor your and your baby's health.</p>
          <p className="mb-2"><strong>Diet & Nutrition:</strong> Eat a balanced diet rich in iron, calcium, and folic acid. Avoid raw meat, unpasteurized dairy, and excessive caffeine.</p>
          <p><strong>Hospital Bag:</strong> Prepare your hospital bag by week 36. Include essentials for yourself, your baby, and your partner.</p>
        </>
      )
    },
    {
      title: 'Surgery Guidelines & Pre-op Preparation',
      content: (
        <>
          <p className="mb-2"><strong>Fasting:</strong> You will be advised not to eat or drink for a specific period before your surgery. Please follow these instructions carefully.</p>
          <p className="mb-2"><strong>Medication:</strong> Inform us of all medications you are currently taking. Some may need to be stopped before the procedure.</p>
          <p><strong>Post-op Care:</strong> Arrange for someone to drive you home and assist you for the first 24 hours after your surgery.</p>
        </>
      )
    },
    {
      title: 'Outpatient Consultation Timings',
      content: (
        <>
          <p><strong>Monday - Saturday:</strong> 10:00 AM - 1:00 PM & 4:00 PM - 6:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Timings are subject to change. It is advisable to book an appointment to avoid waiting.</p>
        </>
      )
    },
    {
        title: 'Hospital Visiting Hours & Map',
        content: (
            <>
                <p className="mb-2"><strong>General Ward:</strong> 4:00 PM - 6:00 PM Daily</p>
                <p className="mb-4"><strong>Maternity Ward:</strong> One designated visitor allowed with the patient. Other visitors during general hours only.</p>
                <p className="font-semibold mb-2 dark:text-gray-300">Directions:</p>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.975193952707!2d72.9099836148819!3d20.17706348646698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf350c3132e3%3A0x4bf7a84a6217ee18!2sHaria%20L.G.%20Rotary%20Hospital!5e0!3m2!1sen!2sin!4v1678886432123!5m2!1sen!2sin"
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen={true}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="dark:grayscale">
                    </iframe>
                </div>
            </>
        )
    }
  ];

  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200">Patient Guide</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 max-w-3xl mx-auto">Important information to help you prepare for your visit and care at Haria L G Rotary Hospital.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {guides.map((guide, index) => (
              <AccordionItem key={index} title={guide.title} isOpen={openIndex === index} onClick={() => handleAccordionClick(index)}>
                {guide.content}
              </AccordionItem>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PatientGuidePage;