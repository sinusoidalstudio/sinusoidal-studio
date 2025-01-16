import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const form = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log('Contact form data:', data);
    toast.success('Message sent successfully!');
    form.reset();
  };

  return (
    <div className="bg-card p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;