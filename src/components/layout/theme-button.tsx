"use client";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Switch } from "../ui/switch";

interface ThemeButtonProps {
  style?: "button" | "switch";
}

export function ThemeButton({ style = "switch" }: ThemeButtonProps) {
  const { setTheme, theme } = useTheme();
  const [dark, setDark] = useState<boolean>(theme === "dark");

  useEffect(() => {
    if (dark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [dark]);

  if (style === "switch") {
    return (
      <div className="flex flex-row space-x-2 items-center justify-center absolute bottom-4 right-4">
        {dark ? (
          <MoonIcon className="size-6 opacity-20" />
        ) : (
          <MoonIcon className="size-6" />
        )}
        <Switch
          checked={theme == "light"}
          onCheckedChange={() => setDark(!dark)}
        />
      </div>
    );
  } else {
    return (
      <Dialog>
        <DialogTrigger className="absolute bottom-6 right-6" asChild>
          <Button size="icon" className="rounded-full">
            <SunMoonIcon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Change Theme</DialogTitle>
            <DialogDescription>
              Change the visible theme of Sprouts.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-2">
            <Button
              type="button"
              className="justify-start items-center space-x-2 w-full px-3"
              variant={!dark ? "default" : "outline"}
              onClick={() => setDark(false)}
            >
              <SunIcon className="h-4 w-4" />
              <span>Light Mode</span>
            </Button>
            <Button
              type="button"
              className="justify-start items-center space-x-2 w-full px-3"
              variant={dark ? "default" : "outline"}
              onClick={() => setDark(true)}
            >
              <MoonIcon className="h-4 w-4" />
              <span>Dark Mode</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
