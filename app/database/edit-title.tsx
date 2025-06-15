import { prisma } from '@/lib/prisma'; // Adjust the import path as needed
import { revalidatePath } from 'next/cache';

type Props = {
    reviewId: string;
};

export default async function EditTitle({ reviewId }: Props) {
    async function updateTitle(formData: FormData) {
        'use server';
        const newTitle = formData.get('title') as string;
        if (!newTitle) return;

        await prisma.review.update({
            where: { id: reviewId },
            data: { name: newTitle },
        });

        revalidatePath('/'); // Adjust path as needed
    }

    const review = await prisma.review.findUnique({
        where: { id: reviewId },
    });

    if (!review) return <div>Review not found.</div>;

    return (
        <form action={updateTitle}>
            <input
                type="text"
                name="title"
                defaultValue={review.name}
                required
            />
            <button type="submit">Update Title</button>
        </form>
    );
}