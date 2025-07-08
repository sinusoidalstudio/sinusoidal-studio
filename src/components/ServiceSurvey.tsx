
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { Form } from './ui/form';
import { ServiceSurveyValues } from '@/types/survey';
import { SurveyContent } from './survey/SurveyContent';
import { SurveyNavigation } from './survey/SurveyNavigation';

const ServiceSurvey = () => {
  const form = useForm<ServiceSurveyValues>({
    defaultValues: {
      email: '',
      projectType: '',
      services: [],
    }
  });
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = ['projectType', 'services', 'email'];

  const handleSubmit = async () => {
    const data = form.getValues();
    
    // Validate that all required fields are filled
    if (!data.projectType || data.services.length === 0 || !data.email) {
      toast.error('Please fill in all fields before submitting.');
      return;
    }

    try {
      // Format project type to be more readable
      const formattedProjectType = data.projectType === 'new-project' ? 'New Project' : 'Existing Project';
      
      // Create a formatted message with all details
      const templateParams = {
        from_email: data.email,
        to_email: 'sinusoidalstudio@gmail.com',
        message: `
Project Details:
- Project Type: ${formattedProjectType}
- Services Required: ${data.services.join(', ')}
- Contact Email: ${data.email}
        `.trim(),
        project_type: formattedProjectType,
        services: data.services.join(', '),
      };

      await emailjs.send(
        'service_div5kl7',
        'template_1hl0ynl',
        templateParams,
        'EwArlFJTahljEsCSI'
      );
      
      toast.success('Survey submitted successfully!');
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to submit survey. Please try again.');
    }
  };

  const nextStep = async () => {
    let canProceed = true;
    const currentValues = form.getValues();

    // Validate current step before proceeding
    switch (steps[currentStep]) {
      case 'projectType':
        if (!currentValues.projectType) {
          toast.error('Please select a project type');
          canProceed = false;
        }
        break;
      case 'services':
        if (currentValues.services.length === 0) {
          toast.error('Please select at least one service');
          canProceed = false;
        }
        break;
      case 'email':
        if (!currentValues.email) {
          toast.error('Please enter your email');
          canProceed = false;
        }
        break;
    }

    if (canProceed && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Service Survey</h2>
      <Form {...form}>
        <form className="space-y-6">
          <SurveyContent
            form={form}
            currentStep={currentStep}
            steps={steps}
          />
          <SurveyNavigation
            currentStep={currentStep}
            totalSteps={steps.length}
            onPrevious={previousStep}
            onNext={nextStep}
            onSubmit={handleSubmit}
          />
        </form>
      </Form>
    </div>
  );
};

export default ServiceSurvey;
