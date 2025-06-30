'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "./card"
import { signIn } from "@/lib/auth-client"
import { useRouter } from "next/navigation"



import {Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const SignInFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})

export default function SignInForm() {
    const router = useRouter()

    const form = useForm<z.infer<typeof SignInFormSchema>>({
        resolver: zodResolver(SignInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof SignInFormSchema>) {
        await signIn.email({
            email: values.email,
            password: values.password,
        }, {
            onRequest: (ctx) => {
                console.log("request signIn")
            },
            onSuccess: (ctx) => {
                console.log("signIn success.",ctx)
                router.push("/auth/")
            },
            onError: (ctx) => {
                alert(ctx.error.message)
            },
        })
    }

    return (
        <Card className="mt-10 p-6 z-50 w-full">
            <Form {...form}>
                <form className="space-y-6">
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
                    <Button onClick={form.handleSubmit(onSubmit)} className="w-full bg-primary text-white py-2 rounded mt-4">
                        Sign In
                    </Button>
                </form>
            </Form>
        </Card>
    )
}