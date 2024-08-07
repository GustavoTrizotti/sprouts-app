"use client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { signInSchema, SignInSchema } from "@/src/types/sign-in.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSignIcon, LockIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "@/src/actions/auth";
export default function Login() {
  const { register, handleSubmit } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();

  const signInAction: () => void = handleSubmit(
    async (data) => {
      const response = await signIn(data);
      if (response?.error) {
        toast.error(response.error);
      } else if (response) {
        toast.success("Logged in successfully!");
        router.replace("/home");
      }
    },
    async (error) => {
      Object.keys(error).map((key) =>
        toast.warning(error[key as keyof SignInSchema]?.message)
      );
    }
  );

  return (
    <main className="flex flex-1 items-center justify-center">
      <section className="flex w-[35%] flex-col space-y-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h3 className="text-xl font-bold">Sign-in with e-mail</h3>
          <span className="opacity-50 font-medium">
            Enter your credentials to sign-in.
          </span>
        </div>
        <form className="flex flex-col space-y-4" action={signInAction}>
          <div className="flex flex-col space-y-2">
            <Label
              htmlFor="email"
              className="flex flex-row items-center opacity-80 space-x-1 p-2"
            >
              <AtSignIcon className="size-4" />
              <span>E-mail</span>
            </Label>
            <Input
              id="email"
              {...register("email")}
              placeholder="johndoe@example.com"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label
              htmlFor="password"
              className="flex flex-row items-center opacity-80 space-x-1 p-2"
            >
              <LockIcon className="size-4" />
              <span>Password</span>
            </Label>
            <Input
              id="password"
              {...register("password")}
              placeholder="Type your password here..."
              autoComplete="off"
              type="password"
            />
          </div>
          <Button className="flex w-full" type="submit">
            <span className="font-semibold">Sign-in</span>
          </Button>
        </form>
      </section>
    </main>
  );
}
