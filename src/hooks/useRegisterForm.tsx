"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  useController,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { z, ZodSchema } from "zod";

interface UseValidationFormProps<T extends ZodSchema<any>> {
  shape: any; // Shape Here!
  schema: T;
  defaultValues?: Record<keyof z.infer<T>, any>;
}

interface UseValidationFormReturn<T extends FieldValues> {
  control: UseFormReturn<T>["control"];
  handleSubmit: UseFormReturn<T>["handleSubmit"];
  fields: Record<keyof T, ControllerRenderProps<T, Path<T>>>;
}

export function useValidationForm<T extends ZodSchema<any>>({
  schema,
  shape,
  defaultValues,
}: UseValidationFormProps<T>): UseValidationFormReturn<z.infer<T>> {
  type FormSchema = z.infer<T>;
  const { control, handleSubmit } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const fields = Object.keys(shape).reduce((acc, key) => {
    const { field } = useController<FormSchema>({
      name: key as Path<FormSchema>,
      control,
      defaultValue: defaultValues?.[key] || "",
    });
    return { ...acc, [key]: field };
  }, {} as Record<keyof FormSchema, ControllerRenderProps<FormSchema, Path<FormSchema>>>);

  return {
    control,
    handleSubmit,
    fields,
  };
}
