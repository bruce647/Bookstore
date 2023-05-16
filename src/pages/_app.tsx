import { NavBar } from '@/components/navbar'
import { ConfigProvider } from 'antd'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.css'
import { Provider } from 'react-redux'
import { store } from '../store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#000',
            },
          }}
        >
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <div style={{ height: '100%' }}>
            <NavBar />
            <Component {...pageProps} />
          </div>
        </ConfigProvider>
      </Provider>
    </>
  )
}
