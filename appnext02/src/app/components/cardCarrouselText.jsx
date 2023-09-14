"use client";
import { Card, Button } from "@material-tailwind/react";

export default function cardCarrouselText({ item }) {
  return (
    <Card className="rounded-xl">
      <div className="relative h-48 w-48">
        <img
          src={item.picture}
          alt={item.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <p>{item.textshort}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
