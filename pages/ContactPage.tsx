import React, { useState, FormEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Placeholder submission logic
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
    };

  return (
    <div className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200">Get In Touch</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">We are here to help. Reach out to us with any questions or to schedule a visit.</p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-pink text-brand-primary p-3 rounded-full mt-1">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">Haria L G Rotary Hospital, <br/>NH-8, Chharwada Road, Vapi, Gujarat.</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <div className="bg-brand-pink text-brand-primary p-3 rounded-full mt-1">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">+91 79908 52823</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-4">
                  <div className="bg-brand-pink text-brand-primary p-3 rounded-full mt-1">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">contact@drnehabhatnagar.com</p>
                  </div>
                </div>
              </div>
               <div className="mt-8 rounded-lg overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.975193952707!2d72.9099836148819!3d20.17706348646698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf350c3132e3%3A0x4bf7a84a6217ee18!2sHaria%20L.G.%20Rotary%20Hospital!5e0!3m2!1sen!2sin!4v1678886432123!5m2!1sen!2sin"
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="dark:grayscale">
                </iframe>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Send a Message</h3>
                {isSubmitted ? (
                     <div className="text-center p-6 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-lg">
                        <h4 className="font-semibold text-lg">Thank you!</h4>
                        <p>Your message has been sent successfully.</p>
                     </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input type="text" name="name" id="name" value={formState.name} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white" />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input type="email" name="email" id="email" value={formState.email} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white" />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea name="message" id="message" rows={5} value={formState.message} onChange={handleInputChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-brand-primary hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                            Send Message
                        </button>
                    </div>
                </form>
                )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;