import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/route/test/abc">
          Go to pages/route/test/index.js
        </Link>
      </li>
      <li>
        <Link href="/route/test2/test3/index.js">
          Go to /pages/route/test2/test3/index.js
        </Link>
      </li>
      <li>
        <Link href="/route/mypage/test?foo=TTT">
          Go to pages/route/mypage/[user_id].js (test foo=TTT)
        </Link>
      </li>
      <li>
        <Link href="/route/mypage">
          Go to pages/route/mypage.js
        </Link>
      </li>
      <li>
        <Link href="/route/catch_all_routers/a/b/c">
          Go to pages/route/catch_all_routers/[...param].js
        </Link>
      </li>
    </ul>
  )
}

export default Home
