import { Button, Header, Loader } from "semantic-ui-react";
import styles from "./Item.module.css";
import { Data } from "@/pages";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'

interface ItemProps {
    item: Data|null;
  }
  
export default function Item({ item }:any) {
  console.log(item)
  const router=useRouter()
  // useEffect(()=>{
  //   if(item.status===404){
  //     router.push('/404')
  //   }
  // },[])
  if (!item) {
    return <Loader>loading..</Loader>; // 혹은 로딩 상태를 나타내는 컴포넌트 등을 반환할 수 있습니다.
  }
  const {
    id,
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;
  
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{name}</strong>
          <strong className={styles.num_price}>${price}</strong>
          <span className={styles.txt_info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}

