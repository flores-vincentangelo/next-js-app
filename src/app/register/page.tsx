import Link from "next/link"

export default function Page() {
    return (
        <div>
            <h1>Hello from register</h1>
            <div>
                <div>
                    <Link href={'/'}>Go to home</Link>
                </div>
                <div>
                    <Link href={'/login'}>Go to login</Link>
                </div>
            </div>

        </div>

    )

}


