'use client';
import * as React from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { authClient } from '@/lib/auth-client';
import { useRouter, useSearchParams } from 'next/navigation';


export default function ForgetPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const Router = useRouter()

    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    
    async function handleSubmit(formData: FormData) {
        const password = formData.get("password") as string
        setLoading(true);
        if (!token) throw new Error("invalid token")
        try {
            await authClient.resetPassword(
                {
                    newPassword: String(password),
                    token,
                
                },
            {
                onSuccess: () => {
                    Router.push(`/auth/`)
                    Router.refresh()
                    toast.success("Its work")
                },
                onError: (error) => {
                    toast.error(error.error.message)
                }
            })
        } catch (err) {
            toast.error(String(err));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>You got a second chance</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="email">New password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                disabled={loading}
                                placeholder="you@example.com"
                                />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading || !email}>
                            {loading ? 'Sending...' : 'Send reset link'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}