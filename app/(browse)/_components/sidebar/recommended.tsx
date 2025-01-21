"use client";

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import UserItem, { UserItemSkeleton } from "./user-item";

interface RecomendedProps {
  data: User[];
}

const Recommended = ({ data }: RecomendedProps) => {
  const { collapsed } = useSidebar();

  const showLabel = !collapsed && data.length > 0;
  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            imageUrl={user.imageUrl}
            username={user.username}
            key={user.id}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
};

export const RecomendedSkeleton = () => {
  return (
    <ul>
      {[...Array(3)].map((_, i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};

export default Recommended;
