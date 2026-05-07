'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="glass fixed top-0 left-0 w-full z-50 px-8 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-cyan-300 ice-glow" />

        <h1 className="text-3xl font-black tracking-wide">
          Blue Icee
        </h1>
      </div>

      <div className="flex items-center gap-6 text-lg font-semibold">
        <Link href="/">Home</Link>
        <Link href="/realms">Realms</Link>
        <Link href="/arcade">Arcade</Link>
        <Link href="/inventory">Inventory</Link>
      </div>
    </nav>
  )
}
