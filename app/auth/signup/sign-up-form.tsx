'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { signUp } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignUpFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    image: z.string().url({ message: "Invalid URL." }).optional().or(z.literal("")),
})

export default function SignUp() {

    const router = useRouter()

    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            image: "",
        },
    })

    const [error,setError] = useState(null)

     async function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("submitting values",values)
    await signUp.email({
        email: values.email, // user email address
        password: values.password, // user password -> min 8 characters by default
        name: values.name, // user display name
        image: values.image, // User image URL (optional)
   }, {
        onRequest: (ctx) => {
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            console.log("Auth to ",ctx.data)
            router.push("/auth");
        },
        onError: (ctx) => {
            // display the error message
            setError(ctx.error.message);
        },
});
  }

    return (
        <Card className="z-50 mt-10 p-6">
            <Form {...form}>
                <form className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" type="password" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Must be at least 8 characters.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image URL (optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="https://example.com/avatar.jpg" type="url" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button onClick={form.handleSubmit(onSubmit)} className="bg-primary mt-4 py-2 rounded w-full text-white">
                        Sign Up
                    </Button>
                </form>
            {error && <span className="bg-red-500 p-3 rounded-sm text-center">{error}</span>}    
            </Form>
        </Card>
    )
}