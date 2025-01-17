import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { ServiceSurveyValues } from "@/types/survey";

interface BudgetFieldProps {
  form: UseFormReturn<ServiceSurveyValues>;
}

export const BudgetField = ({ form }: BudgetFieldProps) => {
  return (
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
  );
};