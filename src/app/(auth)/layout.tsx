import { AuthSection } from "@/components/auth/auth-section";
import { ThemeButton } from "@/components/layout/theme-button";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactElement }>) {
  return (
    <div className="relative flex flex-1 h-screen p-8 bg-gradient-to-b from-white to-neutral-200 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-950">
      <AuthSection />
      {children}
      <ThemeButton style="button" />
    </div>
  );
}
