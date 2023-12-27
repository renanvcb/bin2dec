"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";

export default function Converter() {
  const [decimal, setDecimal] = useState<number>(0);

  function toDecimal(bin: string): void {
    let dec = 0;

    for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
      dec += Number(bin[c]) * Math.pow(2, i);
    }

    setDecimal(dec);
  }

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col items-center justify-center content-center">
      <p>Enter a binary number, get a decimal conversion.</p>
      <Input
        type="number"
        className="w-1/3 min-w-96 no-spinner"
        onChange={(event) => toDecimal(event.target.value)}
      />
      <p>{decimal}</p>
    </div>
  );
}
