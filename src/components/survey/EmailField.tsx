import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { ServiceSurveyValues } from "@/types/survey";

interface EmailFieldProps {
  form: UseFormReturn<ServiceSurveyValues>;
}

export const EmailField = ({ form }: EmailFieldProps) => {
  return (
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
  );
};