"use client"

import Link from "next/link";
import Counter from "./features/counter/Counter";

export default function Home() {
    return (
        <div>
            <div>
                Hello from Home
            </div>
            <div className="nav-bar">
                <div>
                    <Link href={'/register'}>Go to register</Link>
                </div>
                <div>
                    <Link href={'/login'}>Go to login</Link>
                </div>

            </div>
            <div className="contents">
                <Counter></Counter>
            </div>
        </div>
    );
}
