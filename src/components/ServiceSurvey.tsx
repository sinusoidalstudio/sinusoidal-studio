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
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const ServiceSurvey = () => {
  const form = useForm<ServiceSurveyValues>({
    defaultValues: {
      email: '',
      projectType: '',
      services: [],
      budget: '',
    }
  });
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = ['projectType', 'services', 'budget', 'email'];

  const onSubmit = async (data: ServiceSurveyValues) => {
    // Validate that all required fields are filled
    if (!data.projectType || data.services.length === 0 || !data.budget || !data.email) {
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
- Budget Range: ${data.budget}
- Contact Email: ${data.email}
        `.trim(),
        project_type: formattedProjectType,
        services: data.services.join(', '),
        budget: data.budget,
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
      case 'budget':
        if (!currentValues.budget) {
          toast.error('Please select a budget range');
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Tabs value={steps[currentStep]} className="w-full">
            <TabsList className="hidden">
              {steps.map((step) => (
                <TabsTrigger key={step} value={step}>
                  {step}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="projectType" className="mt-0">
              <ProjectTypeField form={form} />
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <ServicesField form={form} />
            </TabsContent>

            <TabsContent value="budget" className="mt-0">
              <BudgetField form={form} />
            </TabsContent>

            <TabsContent value="email" className="mt-0">
              <EmailField form={form} />
            </TabsContent>
          </Tabs>

          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={previousStep}
              disabled={currentStep === 0}
            >
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button type="submit">Submit Survey</Button>
            ) : (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ServiceSurvey;