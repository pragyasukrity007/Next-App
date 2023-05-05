import Link from 'next/link';
import Image from 'next/image' 
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/anime.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">Demon Slayer</Link>
      <Link href="/components/">Names</Link>
    </nav>
);
}
 
export default Navbar;