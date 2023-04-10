import Link from 'next/link'
import React from 'react'
import {groq } from "next-sanity";
import { client } from '@/lib/sanity.client';

const Home = ({products}) => { 
  console.log(products)
  return (
    <div className="grid grid-cols-5 gap-5 max-w-5xl mx-auto">
      {products.map((item) => (
        <div key={item._id}>{item.title}</div>
      ))}
        
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
    const query = groq`
        *[_type == "product"]{
            ...,
            category[]->
        }
    `
    const products = await client.fetch(query)
    
    return {
      props: {products}, // will be passed to the page component as props
    }
  }