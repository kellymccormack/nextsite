import Link from 'next/link';

export default function Navigation() {
    return <>
        <Link href="/">Home</Link>
        <Link href="/accessibility">Accessibility</Link>
        <Link href="/development">Development</Link>
        <Link href="/creative-technology">Creative Technology</Link>
        <Link href="/bio">Bio</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
    </>
}