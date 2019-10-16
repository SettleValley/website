import React, { Component } from 'react'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function Listing (props) {
  console.warn('props', props);
  return (
    <div>
      <p>Preact has {props.stars} ⭐</p>
      <Link href='/'>
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    </div>
  )
}

Listing.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/developit/preact')
  const json = await res.json() // better use it inside try .. catch
  return { stars: json.stargazers_count }
}

export default Listing;
