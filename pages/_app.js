// ここでcssをimportすると全体にcssが適用される
import '../styles/globals.css'
import '../styles/globals_div_style.css'

// デフォ
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// カスタム app ページごとにレイアウトが異なる場合
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

// 単一レイアウト
// import Layout1 from './components/layout1/layout'
// import Layout2 from './components/layout2/layout'
// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout1>
//       <Layout2>
//         <Component {...pageProps} />
//       </Layout2>
//     </Layout1>
//   )
// }

export default MyApp
