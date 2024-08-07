import { cn } from "@/src/lib/utils";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  invertColors?: boolean;
}

function SpinnerDot({
  index,
  invertColors = false,
}: {
  index: number;
  invertColors?: boolean;
}) {
  const invertedColors = "bg-black dark:bg-white";

  return (
    <motion.div
      animate={{
        translateY: [0, -2, 2, 0, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
        repeatDelay: 0.5,
        delay: (index + 1) * 0.1,
        ease: "easeOut",
      }}
      className={clsx(
        "w-2 h-2 rounded-full",
        invertColors ? invertedColors : "bg-white dark:bg-black"
      )}
    />
  );
}

export function Spinner(props: SpinnerProps) {
  return (
    <motion.div
      animate={{
        opacity: [0.5, 0.25, 0.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: "easeIn",
      }}
      className={cn(
        "flex flex-row space-x-1 items-center justify-center p-3",
        props.className
      )}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <SpinnerDot key={i} index={i} invertColors={props.invertColors} />
      ))}
    </motion.div>
  );
}
