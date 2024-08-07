import { Button } from "@/src/components/ui/button";
import { BookIcon, SproutIcon } from "lucide-react";
import Wave from "react-wavify";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <Wave
        fill="#222"
        className="absolute bottom-0 opacity-20"
        options={{
          amplitude: 30,
          speed: 0.15,
          points: 4,
        }}
      />
      <Wave
        fill="#222"
        className="absolute bottom-0 opacity-40"
        options={{
          amplitude: 40,
          height: 50,
          speed: 0.35,
          points: 4,
        }}
      />
      <div className="flex flex-1 flex-col space-y-6 items-center justify-start pt-[50%] lg:pt-[10%] md:pt-[25%] sm:pt-[10%]">
        <div className="flex w-full flex-col space-y-3 items-center justify-center">
          <h1 className="text-2xl md:text-5xl text-center font-bold tracking-wider">
            Sprouts
          </h1>
          <h2 className="text-lg md:text-3xl max-w-[50%] md:max-w-full text-center font-bold tracking-wider opacity-60">
            Plant it, plow it and take care.
          </h2>
        </div>
        <p className="text-md md:text-lg max-w-[65%] text-center font-medium opacity-40">
          Sprouts offers to you a huge catalogue to discover the best treatment
          and tips to grow your plants at home.
        </p>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <Button className="w-full md:h-11 space-x-2">
            <SproutIcon />
            <span className="text-md md:text-lg font-semibold">
              Check Catalogue
            </span>
          </Button>
          <Button variant="outline" className="md:h-11 space-x-2">
            <BookIcon />
            <span className="text-md md:text-lg font-semibold">Open Guide</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
