import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../../components/Item";
import { Data } from "..";
import { Divider, Header, Loader } from "semantic-ui-react";
import { Axios } from "axios";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Error404 from "../404";

const Post = ({ item }:any) => {
  const router = useRouter();
  console.log(Object.keys(item).length)
  // const { id } :any= router.query;
  // const [item, setItem] = useState<Data | null>(null);
  // const [isLoading,setIsloading]=useState(true)
  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  
  // const getData=async()=>{
  //   const response=await fetch(API_URL)
  //   const result=await response.json()
  //   const filteredResult:Data={
  //       id:result.id,
  //       name:result.name,
  //       image_link:result.image_link,
  //       price:result.price,
  //       description:result.description,
  //       updated_at:result.updated_at,
  //       category:result.category,
  //       product_type:result.product_type,
  //       product_link:result.product_link,
  //   }
  //   setItem(filteredResult)
  //   setIsloading(false)
  // }
  
  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }
  // }, [id]);
  
  return (
    <>
      {Object.keys(item).length!==2 ?
        <>
          <Head>
            <title>{item.name}</title>
            <meta name='description' content={item.description}></meta>
          </Head>
          <Item item={item}/>
        </>
        :
        <>
          <Error404 content='요청하신 제품이 없습니다'/>
        </>
        
      }
    </>
  )
};

export default Post;

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await fetch(apiUrl);
  const data = await res.json();

  return {
    props: {
      item: data,
    },
  };
}

//서버사이드 랜더링을 위한 함수
//이를 통해 서버측에서 api호출하여
//결과값을 위 컴포넌트의 프롭으로 넣어줌

//결과적으로 페이지 소스를 봐보면 이전과 달리 api 호출값이
//들어가있는 것을 볼 수 있다 ==> seo에 유리하다