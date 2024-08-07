"use client";
import { logOut } from "@/src/actions/auth";
import clsx from "clsx";
import { LogOutIcon, SproutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface HeaderItemProps {
  label: string;
  href: string;
}

export function MainHeader() {
  const router = useRouter();
  const routes = {
    home: "/home",
    plants: "/plants",
    guide: "/guide",
    about: "/about",
    contact: "/contact",
  };

  return (
    <header className="hidden md:flex w-full p-4 px-6 space-x-4 items-center justify-between">
      <div className="flex flex-row space-x-2 items-center justify-center">
        <SproutIcon className="size-6" />
        <h2 className="text-md text-white uppercase">Sprouts</h2>
      </div>
      <ul className="flex items-center justify-center space-x-4">
        {Object.keys(routes).map((route) => (
          <HeaderItem
            label={route}
            href={routes[route as keyof typeof routes]}
            key={route}
          />
        ))}
      </ul>
      <div className="flex flex-row items-center justify-center space-x-4">
        <Avatar className="hover:opacity-80 transition-opacity cursor-pointer">
          <AvatarImage src="../../../public/profile.jpg" />
          <AvatarFallback>SP</AvatarFallback>
        </Avatar>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            logOut();
            router.replace("/login");
          }}
        >
          <LogOutIcon className="size-4" />
        </Button>
      </div>
    </header>
  );
}

function HeaderItem({ label, href }: HeaderItemProps) {
  const pathname = usePathname();
  const isPathname = pathname === href;

  return (
    <Link href={href}>
      <li
        className={clsx(
          "uppercase text-xs transition-all p-2 px-3 rounded",
          isPathname
            ? "bg-white text-black hover:opacity-80"
            : "hover:bg-white/5"
        )}
      >
        {label}
      </li>
    </Link>
  );
}
