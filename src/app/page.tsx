import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div>
                Hello from Home
            </div>
            <div>
                <Link href={'/register'}>Go to register</Link>
            </div>
            <div>
                <Link href={'/login'}>Go to login</Link>
            </div>
        </div>
    );
}
