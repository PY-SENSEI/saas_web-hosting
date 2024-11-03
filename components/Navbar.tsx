import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return(
    <>
    <nav className="flex justify-between items-center mb-1 py-2 pt-4 px-4 md:px-8 lg:px-16">
       <Link href="/" className="flex items-center">
           <Image 
            src="/svg/lock-square-rounded.svg"
            alt="HTTP3 logo"
            width={48}
            height={40}
            priority
           />

        </Link>
    </nav>
    </>
    )
}