import { Skeleton } from "@/components/ui/skeleton";
import UserAvatar from "@/components/user-avatar";
import Image from "next/image";

interface ThumbnailProps {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}

export const Thumbnail = ({
  fallback,
  isLive,
  src,
  username,
}: ThumbnailProps) => {
  let content;
  if (!src) {
    content = (
      <div className="bg-sidebar flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-1 rounded-md">
        <UserAvatar
          size={"lg"}
          showBadge
          username={username}
          imageUrl={fallback}
          isLive={isLive}
        />
      </div>
    );
  } else {
    content = (
      <Image
        src={src}
        fill
        alt="Thumbnail"
        className="object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-1 rounded-md"
      />
    );
  }

  return (
    <div className="group aspect-video relative rounded-md cursor-pointer">
      {content}
    </div>
  );
};

export const ThumbnailSkeleton = () => {
  return (
    <div className="group aspect-video relative rounded-xl cursor-pointer">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
