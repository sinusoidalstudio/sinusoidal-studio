import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Form } from './ui/form';
import { ServiceSurveyValues } from '@/types/survey';
import { EmailField } from './survey/EmailField';
import { ProjectTypeField } from './survey/ProjectTypeField';
import { ServicesField } from './survey/ServicesField';
import { BudgetField } from './survey/BudgetField';

const ServiceSurvey = () => {
  const form = useForm<ServiceSurveyValues>();

  const onSubmit = async (data: ServiceSurveyValues) => {
    try {
      await emailjs.send(
        'service_div5kl7',
        'template_1hl0ynl',
        {
          from_email: data.email,
          project_type: data.projectType,
          services: data.services.join(', '),
          budget: data.budget,
          to_email: 'sinusoidalstudio@gmail.com',
        },
        'EwArlFJTahljEsCSI'
      );
      toast.success('Survey submitted successfully!');
      form.reset();
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to submit survey. Please try again.');
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Service Survey</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <EmailField form={form} />
          <ProjectTypeField form={form} />
          <ServicesField form={form} />
          <BudgetField form={form} />
          <Button type="submit" className="w-full">Submit Survey</Button>
        </form>
      </Form>
    </div>
  );
};

export default ServiceSurvey;