"use client";
import { AtSignIcon, KeyRoundIcon, SproutIcon } from "lucide-react";
import { usePathname } from "next/navigation";

export function AuthSection() {
  const pathname = usePathname();
  const authPaths: Record<string, Array<any>> = {
    "/login": ["Login with E-mail", <AtSignIcon className="size-5" />],
    "/register": ["Register Account", <KeyRoundIcon className="size-5" />],
  };

  return (
    <section className="hidden md:flex flex-1 flex-col items-start justify-between dark:bg-white/5 border-2 bg-black/5 border-black/10 dark:border-white/10 dark:text-white rounded">
      <div className="flex items-center justify-center p-6 space-x-2">
        <SproutIcon className="size-7" />
        <h1 className="text-xl font-semibold">Sprouts</h1>
      </div>
      <div className="flex flex-col items-start justify-center p-6 space-y-1">
        <span className="text-sm font-medium opacity-60">Authentication</span>
        <div className="flex flex-row space-x-2 items-center justify-center">
          {authPaths[pathname][1] || null}
          <h1 className="text-lg font-semibold">
            {authPaths[pathname][0] || ""}
          </h1>
        </div>
      </div>
    </section>
  );
}
