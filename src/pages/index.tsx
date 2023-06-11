import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginModal from '../../components/Modal'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
// import styles from '@/styles/Home.module.css'
import { Divider, Header, Loader } from "semantic-ui-react";
import NotFound from './404'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })


export interface Data{
  id:number
  image_link:string
  name:string
  category:string
  price:string
  product_type:string
  updated_at:string
  product_link:string
  description:string

}


export default function Home() {
  const [list,setList]=useState<Data[]>([])
  const [isLoading,setIsloading]=useState(true)
  const API_URL ="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
    const getData=async()=>{
        const response=await fetch(API_URL)
        const result=await response.json()
        const filteredResult=result.map((value:Data)=>({
          id:value.id,
          image_link:value.image_link,
          name:value.name,
          category:value.category,
          price:value.price,
          updated_at:value.updated_at,
          product_link:value.product_link,
          description:value.description
        }))
        setList(filteredResult)
        setIsloading(false)
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
      {/* <LoginModal/> */}
      <Head>
        <title>Home | 천재현</title>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      <ItemList list={list}/>
    </div>
  )
}


