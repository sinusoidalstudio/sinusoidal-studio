
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ServiceSurveyValues } from '@/types/survey';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { EmailField } from './EmailField';
import { ProjectTypeField } from './ProjectTypeField';
import { ServicesField } from './ServicesField';

interface SurveyContentProps {
  form: UseFormReturn<ServiceSurveyValues>;
  currentStep: number;
  steps: string[];
}

export const SurveyContent = ({ form, currentStep, steps }: SurveyContentProps) => {
  return (
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

      <TabsContent value="email" className="mt-0">
        <EmailField form={form} />
      </TabsContent>
    </Tabs>
  );
};
