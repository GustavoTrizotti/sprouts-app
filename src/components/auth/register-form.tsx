"use client";
import { useValidationForm } from "@/hooks/useRegisterForm";
import { registerAccountSchema } from "@/types/register.dto";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function RegisterForm() {
  function onSubmit(data: any) {
    console.log(data);
  }

  const { fields, submit } = useValidationForm({
    schema: registerAccountSchema,
    shape: registerAccountSchema.shape,
    onSubmit,
  });

  return (
    <section className="flex flex-col space-y-2 flex-1 items-center justify-center">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <h2 className="text-xl font-bold">Create a New Account</h2>
        <div className="flex flex-row space-x-1 items-center justify-center">
          <p className="text-sm opacity-80">
            Enter data to create your personal account.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-4/6 justify-center p-6 space-y-6">
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={fields.name.value}
              onChange={fields.name.onChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              placeholder="johndoe@domain.com"
              type="email"
              value={fields.email.value}
              onChange={fields.email.onChange}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Type your password here..."
              type="password"
              value={fields.password.value}
              onChange={fields.password.onChange}
            />
          </div>
          <Button className="w-full" onClick={submit}>
            <span className="font-bold">Register Account</span>
          </Button>
        </form>
        <div className="border border-white/10 m-2" />
        <div className="flex flex-row items-center justify-center space-x-1">
          <span className="text-sm opacity-60">Already registered?</span>
          <Link
            className="text-sm underline hover:opacity-80 transition-opacity"
            href="/login"
          >
            Log-In
          </Link>
        </div>
      </div>
    </section>
  );
}
