import Link from "next/link"

export default function Page() {
    return (
        <div>
            <h1>Hello from login</h1>
            <div>
                <Link href={'/register'}>Go to register</Link>
            </div>
            <div>
                <Link href={'/'}>Go to home</Link>
            </div>
        </div>
)
  }
  
  
  