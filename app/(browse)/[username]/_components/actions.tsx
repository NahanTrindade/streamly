"use client";

import { onBlock, onUnblock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(
            `You are not following ${data.following.username}} anymore`
          )
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId)
        .then((data) => toast.success(`You blocked ${data.blocked.username}`))
        .catch(() => {
          "Something went wrong";
        });
    });
  };

  const handleUnblock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) => toast.success(`You unblocked ${data.blocked.username}`))
        .catch(() => {
          "Something went wrong";
        });
    });
  };

  const handleOnClickFollow = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return (
    <>
      <Button disabled={isPending} onClick={handleOnClickFollow}>
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button onClick={handleUnblock} disabled={isPending}>
        Block
      </Button>
    </>
  );
};

export default Actions;
