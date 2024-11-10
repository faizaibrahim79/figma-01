import Link from "next/link";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex justify-around bg-pink-600" h-14 >
            {/* logo */}
            <div>
            <Image src="/logo.png" className="my-6" alt="logo" width={60} height={30.95} />
                {/* <h2 className="text-xl text-white font-bold my-2">Chillz</h2> */}
            </div>
            {/* links */}
            <nav>
                <ul className="flex gap-x-9 my-6">
                    <li><Link className="text-white font-semibold hover:underline" href="/">Home</Link></li>
                    <li><Link className="text-white font-semibold hover:underline" href="/shop">Shop</Link></li>
                    <li><Link className="text-white font-semibold hover:underline" href="/delivery">Delivery</Link></li>
                    <li><Link className="text-white font-semibold hover:underline" href="/contact">Contact</Link></li>
                </ul>
            </nav>
            {/* button */}
            <div>
                <button  className="text-white font-semibold border p-2 my-4 px-5 hover:bg-pink-500">Order Your Ice-cream</button>
            </div>
        </header>
      
    );
  }