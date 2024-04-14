import React from 'react'
import Head from 'next/head'

const Meta = (props) => {
  return (
    <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    {/* <link rel="icon" href="/favicon.ico" /> */}
    <title>Next.js E-commerce</title>
    <meta name="description" content={"Next.js E-commerce" + props.description} />
    <meta name="keywords" content="Next.js, E-commerce" />
    <meta name="author" content="Akademi" />
    <title>{props.title}</title>
    

  </Head>
  </>
  )
}

export default Meta