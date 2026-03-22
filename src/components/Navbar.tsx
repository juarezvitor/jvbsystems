import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5
                    bg-black/85 backdrop-blur-lg border-b border-green/10">
      <span className="font-display font-extrabold text-xl tracking-widest text-cream">
        JVB<span className="text-green">Systems</span>
      </span>
      <Link href="#contato"
        className="px-5 py-2 rounded-md bg-green text-black text-sm font-medium
                   hover:bg-lime transition-colors duration-200">
        Fale conosco →
      </Link>
    </nav>
  )
}
