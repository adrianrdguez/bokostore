import { useState } from 'react';
import Head from 'next/head'
import Header from '../components/header'
import Featured from '../components/featured'
import Shop from '../components/shop'


export const getServerSideProps = async () => {
  const res = await fetch('https://technical-frontend-api.bokokode.com/api/products');
  const data = await res.json();

  console.log(data.data.data)
  return {
    props: { featured: data.data.data }
  }
}

export default function Home({ featured }) {
  const [cart, setCart] = useState([]);

  function addToCart(name, src, price) {
    setCart(() => [...cart, { name: name, src: src, price: price }]);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <div className='flex flex-col items-center min-h-screen py-2 divide-y'>
      <Head>
        <title>Bokokode Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header clearCart={clearCart} cart={cart} className="sticky" />
      <main className='text-center divide-y w-5/6'>
        <Featured cart={addToCart} data={featured} />
        <Shop cart={addToCart} />
      </main>
    </div>
  )
}


