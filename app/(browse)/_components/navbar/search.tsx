"use client";

import queryString from "query-string";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;
    const url = queryString.stringifyUrl(
      { url: "/search", query: { term: value } },
      { skipEmptyString: true }
    );
    router.push(url);
  };

  const onClear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-[400px] flex items-center "
    >
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Search"
        className="rounded-r-none h-9 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:border-[2px] focus-visible:border-white "
      />
      {value && (
        <X
          className=" absolute right-12 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
          onClick={onClear}
        />
      )}
      <Button
        type="submit"
        size={"sm"}
        variant={"secondary"}
        className="rounded-l-none"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
