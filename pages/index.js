import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import globalStyles from '../styles/Home.module.css'

export default function Home() {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/xslhkfdacpqo1")
      .then(raw => raw.json())
      .then(data => setCategoryData(data));

  }, []);
  return (
    <div className={globalStyles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full flex py-40 ">

        <div className="mx-auto container flex flex-col items-center   relative">
          <div className="absolute z-0 inset-center flex flex-col md:flex-row justify-center items-center filter blur-3xl">
            <div className="bg-green-400 w-72 h-72   rounded-full  hidden lg:block"></div>
            <div className="bg-yellow-400 w-72 h-72 rounded-full hidden lg:block "></div>
            <div className="bg-indigo-400 w-72 h-72 rounded-full animate-bounce md:animate-none"></div>
          </div>
          <div className="z-10 flex flex-col justify-center space-y-4">
            <h1 className="text-5xl  lg:text-6xl font-extrabold tracking-tighter leading-tighter flex justify-center items-center text-center px-4">Providing You the<br className="hidden md:inline"/> Best Skilled People Out there</h1>
            <form className="flex w-full justify-between gap-2 px-4 md:px-24 flex-col md:flex-row">
              <input type="text" className="px-2 py-3  bg-white rounded shadow-sm hover:shadow-xl border border-black flex-1 focus:outline-none" />
              <button type="text" className="px-2 py-2 md:py-3 bg-black text-white rounded" >Search</button>
            </form>
            <div className="flex px-4 md:px-24 gap-2 flex-col justify-center md:justify-start">
              <h1 className="font-medium text-center md:text-left">{`Choose categories.`}</h1>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {
                  categoryData.map(item => <button className="bg-white hover:opacity-80 rounded-full py-1 px-2 text-sm font-semibold border border-black">{item.category}</button>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
