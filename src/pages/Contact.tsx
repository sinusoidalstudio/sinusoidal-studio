import React from 'react';
import Navigation from '../components/Navigation';
import ContactForm from '../components/ContactForm';
import ServiceSurvey from '../components/ServiceSurvey';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Get in Touch</h1>
        <div className="grid gap-16 md:grid-cols-2">
          <ContactForm />
          <ServiceSurvey />
        </div>
      </div>
    </div>
  );
};

export default Contact;