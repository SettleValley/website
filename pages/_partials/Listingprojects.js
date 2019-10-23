import React, { Component } from 'react'
import Link from 'next/link';

function Listing () {
  return (
    <div>
      <p>Preact has ⭐</p>
      <Link href='/'>
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    </div>
  )
}

export default Listing;
