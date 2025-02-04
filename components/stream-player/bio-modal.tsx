"use client";

import {
  ComponentRef,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";

interface BioModalProps {
  initialValue: string | null;
}

export const BioModal = ({ initialValue }: BioModalProps) => {
  const [value, setValue] = useState(initialValue || "");

  const closeRef = useRef<ComponentRef<"button">>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      updateUser({ bio: value })
        .then(() => toast.success("Bio updated"))
        .catch(() => toast.error("Something went wrong"));
    });
  };

  useEffect(() => {
    closeRef.current?.click();
  }, [isPending]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} size={"sm"} className="ml-auto">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit user bio</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={onSubmit}>
          <Textarea
            placeholder="User bio"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className="resize-none"
            disabled={isPending}
          />
          <div className="flex justify-between">
            <DialogClose asChild ref={closeRef}>
              <Button type="button" variant={"ghost"} disabled={isPending}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
