'use client';
import * as React from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';


export default function ForgetPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const Router = useRouter()

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        try {
            await authClient.forgetPassword(
                {
                    email: String(email),
                    redirectTo: "/auth/reset-password"
                
                },
            {
                onSuccess: () => {
                    Router.push(`/auth/verify?email=${email}`)
                    Router.refresh()
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
                    <CardTitle>Forgot your password?</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="email"
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