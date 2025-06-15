import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { prisma } from '@/lib/prisma';

async function createReview(formData: FormData) {
    'use server';
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const rating = Number(formData.get('rating'));

    if (!title || !content || isNaN(rating)) {
        // Handle validation error (could be improved)
        return;
    }

    await prisma.review.create({
        data: {
            name: title,
            review: content,
            star: rating,
        },
    });

    revalidatePath('/database');
    redirect('/database');
}

export default function CreateReview() {
    return (
        <form action={createReview} className="space-y-4 max-w-md mx-auto mt-8">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" required />
            </div>
            <div>
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" name="content" required />
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
            </div>
            <Button type="submit">Submit Review</Button>
        </form>
    );
}