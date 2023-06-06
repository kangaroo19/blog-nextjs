import styled from "styled-components"
import TemporaryDrawer from "./NavBar"
import Link from "next/link"
import styles from './Layout.module.css'
export default function Layout({ children }: { children: React.ReactNode }){
    return (
        <div>
            <TemporaryDrawer/>
            <div className={styles.inner}>
                <div className={styles.titlecontainer}>
                    <Link href="/">천재현의 블로그입니다.</Link>
                </div>
                <div className={styles.contentcontainer}>
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </div>
    )
}

const Title=styled(Link)`
  font-size:2rem;
  font-weight:900;
  text-align:center;
`

const ContentContainer=styled.div`
    border-right:3px solid black;
    border-left:3px solid black;
    height:100vh;
`

const Content=styled.div`

`

