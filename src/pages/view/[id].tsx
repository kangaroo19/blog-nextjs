import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../../components/Item";
import { Data } from "..";


const Post = ({resultss}:any) => {
  const router = useRouter();
  const { id } :any= router.query;
    
  const [item, setItem] = useState({});

//   const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData=async()=>{
    // const response=await fetch(API_URL)
    const result=resultss
    const filteredResult={
        id:result.id,
        name:result.name,
        image_link:result.image_link,
        price:result.price,
        description:result.description,
        updated_at:result.updated_at,
        category:result.category,
        product_type:result.product_type,
        product_link:result.product_link,
    }
    setItem(filteredResult)
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return <Item item={item} />;
};

export default Post;


export async function getServerSideProps() { //서버측에서 실행되는 함수,이름은 고정
    const { resultss} = await (
      await fetch(`http://makeup-api.herokuapp.com/api/v1/products/495.json`)
    ).json();
    return {
      props: {
        resultss,
      },
    };
  }