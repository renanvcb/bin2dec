"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function Converter() {
  const [decimal, setDecimal] = useState<number>(0);

  const formSchema = z.object({
    binary: z
      .string()
      .regex(/^[0-1]+$/g, {
        message: "You entered a non-binary digit (please enter only 0 or 1).",
      })
      .max(8, { message: "8 digits max!" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      binary: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    let dec = 0;

    for (let c = values.binary.length - 1, i = 0; c >= 0; c--, i++) {
      dec += Number(values.binary[c]) * Math.pow(2, i);
    }

    setDecimal(dec);
  }

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col items-center justify-center content-center gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-1/3 min-w-96"
        >
          <FormField
            control={form.control}
            name="binary"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center gap-4">
                <FormLabel className="font-bold text-lg">Value</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="text-center"
                    placeholder="100100"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-sm">
                  Enter a binary number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center items-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
      <p className="mt-4">{decimal}</p>
    </div>
  );
}
