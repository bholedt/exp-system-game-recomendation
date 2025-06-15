import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { FieldValues } from "react-hook-form";
import { FieldWrapperProps } from "@/lib/type";

export default function FieldWrapper<T extends FieldValues>({
  children,
  control,
  name,
  label,
}: FieldWrapperProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{children(field)}</FormControl>
        </FormItem>
      )}
    />
  );
}
