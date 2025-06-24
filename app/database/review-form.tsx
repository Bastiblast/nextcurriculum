'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { addReviewSafeAction } from "./review-safe-actions";
import { useRef } from "react";
import { useAction } from "next-safe-action/hooks";

export default function CreateReview() {
    const formRef = useRef<HTMLFormElement>(null);
    const {execute,result} = useAction(addReviewSafeAction);

    console.log('result', result);
    return (
        <form ref={formRef} className="space-y-4 max-w-md mx-auto mt-8">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required />
            <span className="text-red-500 absolute">
                {result?.validationErrors?.name && result?.validationErrors?.name["_errors"]?.join(', ' )}
            </span>
            </div>
            <div>
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" name="content" required />
                            <span className="text-red-500 absolute">
                {result?.validationErrors?.review && result?.validationErrors?.review["_errors"]?.join(', ' )}
            </span>
            </div>
            <div>
                <Label htmlFor="rating">Rating (1-5)</Label>
                <Input
                    id="rating"
                    name="rating"
                    type="number"
                    min={1}
                    max={5}
                    required
                />
                                           <span className="text-red-500 absolute">
                {result?.validationErrors?.star && result?.validationErrors?.star["_errors"]?.join(', ' )}
            </span>
            </div>
            <Button 
                  onClick={async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current as HTMLFormElement);
        // Typesafe action called from client.
        const formObject = {
          name: formData.get('title') as string,
          review: formData.get('content') as string,
          star: Number(formData.get('rating')) as number,
        }
        console.log('formObject', formObject);
        execute(formObject)
        console.log('result', result);
        }
    }
        > Submit Review</Button>
          {result?.validationErrors?.["_errors"] && <p className="text-lime-500 font-bold transition-all animate-accordion-down">{result.validationErrors["_errors"].join(', ')   }</p>}
        </form>
    );
}
