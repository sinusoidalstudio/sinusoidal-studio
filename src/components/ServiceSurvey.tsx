import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';

interface ServiceSurveyValues {
  email: string;
  projectType: string;
  services: string[];
  budget: string;
}

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

  const services = [
    { id: "branding", label: "Branding & Identity" },
    { id: "web-design", label: "Web Design" },
    { id: "motion", label: "Motion Graphics" },
    { id: "3d", label: "3D Animation" },
    { id: "interactive", label: "Interactive Experiences" }
  ];

  return (
    <div className="bg-card p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Service Survey</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Project Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="new-project" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        New Project
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="existing-project" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Existing Project
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>Services Interested In</FormLabel>
                </div>
                {services.map((service) => (
                  <FormField
                    key={service.id}
                    control={form.control}
                    name="services"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={service.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(service.id)}
                              onCheckedChange={(checked) => {
                                const value = field.value || [];
                                return checked
                                  ? field.onChange([...value, service.id])
                                  : field.onChange(value.filter((item) => item !== service.id));
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {service.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Budget Range</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="10k-25k" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        $10,000 - $25,000
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="25k-50k" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        $25,000 - $50,000
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="50k+" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        $50,000+
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Submit Survey</Button>
        </form>
      </Form>
    </div>
  );
};

export default ServiceSurvey;