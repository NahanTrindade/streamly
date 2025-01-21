import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-slate-50 rounded-full p-1">
        <Image src="/gaming.svg" alt="Gamehub" height={"25"} width={"25"} />
      </div>
      <div className={cn("hidden lg:block", font.className)}>
        <p className="text-xl font-semibold">Streamly</p>
        <p className="text-xs text-muted-foreground">Creator Dashboard</p>
      </div>
    </div>
  );
};
