"use server";
import { api } from "@/src/lib/connection";
import { SignInSchema } from "@/src/types/sign-in.dto";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export async function signIn(body: SignInSchema) {
  try {
    const { data } = await api.post("/auth/login", body);
    if (data.access_token) {
      cookies().set("sprouts.auth.token", data.access_token, {
        httpOnly: true,
        secure: true,
      });
    }
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        error: error.response?.data.message,
      };
    }
  }
}

export async function logOut() {
  cookies().set("sprouts.auth.token", "", { expires: new Date(0) });
}
