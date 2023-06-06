import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import styled from 'styled-components'
import Layout from '../../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <Layout>
          
          <Component {...pageProps} />
        </Layout>
      </div>
  )
}


const Title=styled.div`
  font-size:2rem;
  font-weight:900;
`
