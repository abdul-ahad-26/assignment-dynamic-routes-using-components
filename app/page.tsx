import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Dynamic routing</h1>
      <Link href="/country">Country</Link>
    </div>
  )
}

export default Home
