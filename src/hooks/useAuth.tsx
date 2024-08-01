"use client";
import { api } from "@/lib/connection";
import { loginSchema, LoginSchema } from "@/types/login.dto";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useAuth() {
  const mutation = useMutation({
    mutationFn: (data: LoginSchema) => api.post("/auth/login", data),
    onError({ message }) {
      toast.error(message);
    },
  });

  function validate(data: LoginSchema) {
    const { success, error } = loginSchema.safeParse(data);
    if (!success) {
      toast.error(error?.message as string);
      return false;
    }
    return true;
  }

  function jwtValidation(response: any) {}

  async function signIn(body: LoginSchema) {
    if (!validate(body)) {
      return false;
    }

    return await mutation.mutateAsync(body);
  }

  return {
    signIn,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
