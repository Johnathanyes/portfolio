import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header>
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Projects</Link>
    </header>
  )
}

export default NavBar
