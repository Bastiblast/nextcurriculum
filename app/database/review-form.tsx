"use client";
import { addReviewSafeAction } from "./review-safe-actions";
import { useEffect, useRef } from "react";
import { useAction } from "next-safe-action/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

export default function CreateReview({className}: {className:string}) {
  const formRef = useRef<HTMLFormElement>(null);
  const { execute, result } = useAction(addReviewSafeAction);

  const formSchema = z.object({
    name: z
      .string()
      .min(1, "Title is required")
      .max(15, "Title must be less than 15 characters"),
    review: z
      .string()
      .min(1, "Content is required")
      .max(500, "Content must be less than 500 characters"),
    star: z
      .number()
      .min(1, "Rating is required")
      .max(5, "Rating must be between 1 and 5"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      review: "",
      star: 1, // Default rating
    },
  });

  useEffect(() => {
    form.reset();
  }, [result,form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    execute(values);
  }

  return (
    <div className={className}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          ref={formRef}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Review title" {...field} />
                </FormControl>
                <FormDescription>
                  Enter a short title for your review.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input placeholder="Write your review..." {...field} />
                </FormControl>
                <FormDescription>
                  Share your experience or feedback.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
