"use client";

import { Maximize, Minimize } from "lucide-react";
import Hint from "../hint";
import { Button } from "../ui/button";

interface FullscreenControlProps {
  isFullScreen: boolean;
  onToggle: () => void;
}

export const FullscreenControl = ({
  isFullScreen,
  onToggle,
}: FullscreenControlProps) => {
  const Icon = isFullScreen ? Minimize : Maximize;

  const label = isFullScreen ? "Exit fullscreen" : "Enter fullsreen";

  return (
    <div className="flex items-center justify-center gap-4">
      <Hint label={label} asChild>
        <Button
          onClick={onToggle}
          className="text-white p-1.5 hover:bg-white/10 rounded-lg bg-transparent"
        >
          <Icon className="h-5 w-5" />
        </Button>
      </Hint>
    </div>
  );
};
