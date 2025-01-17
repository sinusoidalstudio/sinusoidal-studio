import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { ServiceSurveyValues } from "@/types/survey";

interface ProjectTypeFieldProps {
  form: UseFormReturn<ServiceSurveyValues>;
}

export const ProjectTypeField = ({ form }: ProjectTypeFieldProps) => {
  return (
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
  );
};