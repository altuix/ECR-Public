import React from "react";
import { LoaderCircle } from "lucide-react";

export default function loading() {
  return (
    <div className="flex justify-center w-full">
      <LoaderCircle className="size-24 justify-center animate-spin"></LoaderCircle>
    </div>
  );
}
