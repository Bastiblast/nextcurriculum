import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardDescription } from "../signup/card";

export default async function AuthPage(
    props: {searchParams: Promise<Record<string,string>>}
){
    const searchParams = await props.searchParams;
    const email = decodeURI(searchParams.email);
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Important: check your email
                    {email ? <CardDescription>Mail send</CardDescription>:null}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}