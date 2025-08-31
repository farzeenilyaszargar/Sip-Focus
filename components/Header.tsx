import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <div className="w-screen flex  relative justify-center items-center text-shadow-xl text-shadow-black">
            <Link href={'/'} className=" flex justify-center items-center text-3xl h-15 relative " style={{ WebkitTextStroke: "1px black" }}>Sip'n <span>
                <Image src={"/Logo.gif"} alt="logo" width={100} height={50} className="mb-5 ml-2 mr-2  h-15 w-auto z-10" />
            </span>
             Focus</Link>
        </div>
    );
}