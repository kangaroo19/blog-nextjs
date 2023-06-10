import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../../components/Footer'
import Top from '../../components/Top'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
        <Top />
        <Component {...pageProps} />
        <Footer />
    </div>
  )
}



