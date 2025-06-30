import Link from "next/link"
import { getSession } from "@/lib/auth-server"

export const Header = async () => {
        const session = await getSession()
        const {user} = session ? session : {user:null}
    
    return (
        <header className="flex items-center gap-4 px-4 py-2 border-b">
            <Link href="/">App</Link>
            <div className="flex-1"></div>
            <Link href="/auth">{user ? user.name : "Sign up"}</Link>
        </header>
    )
}