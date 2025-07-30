import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <h1>Welcome to my app</h1>
      <p>this is the home page</p>
    </main>
  )
}
