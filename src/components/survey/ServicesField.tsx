import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Checkbox } from "../ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { SERVICES, ServiceSurveyValues } from "@/types/survey";

interface ServicesFieldProps {
  form: UseFormReturn<ServiceSurveyValues>;
}

export const ServicesField = ({ form }: ServicesFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="services"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel>Services Interested In</FormLabel>
          </div>
          {SERVICES.map((service) => (
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
  );
};