import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-4">
    <div cassName="flex-col items-center gap-4">
        <h1 className="text-xl font-bold">TRONG CANH</h1>
        <Link href="/" className="text-sm hover:text-red-500 font-bold">Quay về trang chủ</Link>
    </div>
      <nav className="flex gap-6">
        <Link href="/works" className="text-sm">Work</Link>
        <Link href="/about" className="text-sm">About</Link>
        <Link href="/contact" className="text-sm">Contact</Link>
        <Link href="#" className="text-sm">Other</Link>
      </nav>
    </header>
  )
}