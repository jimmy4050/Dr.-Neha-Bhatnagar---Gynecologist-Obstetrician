import React, { useState, FormEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AppointmentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    concern: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Contact number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.concern) newErrors.concern = 'Please briefly describe your concern';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('submitting');
    // Dummy submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', date: '', time: '', concern: '' });
    }, 1500);
  };

  return (
    <div className="py-16 lg:py-24 bg-brand-blue/20 dark:bg-blue-900/20">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200">Book an Appointment</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-3">Fill out the form below to request an appointment. We will contact you to confirm.</p>
              </div>

              {status === 'success' ? (
                <div className="text-center p-8 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-lg">
                  <h3 className="text-2xl font-semibold">Thank You!</h3>
                  <p>Your appointment request has been submitted successfully. Our team will get in touch with you shortly to confirm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                      <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white`} required />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                      <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white`} required />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact Number</label>
                      <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white`} required />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                     <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Date</label>
                      <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.date ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white dark:[color-scheme:dark]`} required />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                     <div className="md:col-span-2">
                       <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Preferred Time</label>
                       <input type="time" name="time" id="time" value={formData.time} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.time ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white dark:[color-scheme:dark]`} required />
                       {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                     </div>
                    <div className="md:col-span-2">
                       <label htmlFor="concern" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Reason for Visit / Concern</label>
                       <textarea name="concern" id="concern" rows={4} value={formData.concern} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border ${errors.concern ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary bg-white dark:bg-gray-700 dark:text-white`} required></textarea>
                       {errors.concern && <p className="text-red-500 text-xs mt-1">{errors.concern}</p>}
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <button type="submit" disabled={status === 'submitting'} className="w-full md:w-auto inline-flex justify-center items-center px-12 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-primary hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:bg-gray-400">
                      {status === 'submitting' ? 'Submitting...' : 'Request Appointment'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AppointmentPage;