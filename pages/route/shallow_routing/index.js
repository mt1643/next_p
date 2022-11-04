import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    // useEffect はレンダー後に何かの処理をしないといけいないということをReactに伝える
    // useEffect は毎回レンダー後に呼ばれる
    useEffect(() => {
        // 最初のレンダリング後は常にナビゲーションを行います
        // shallowオプションをつけると,getStaticPropsやgetInitialPropsを実行しないレンダリングができる
        router.push('shallow_routing/?counter=10', undefined, { shallow: true })
    }, [])
    
    useEffect(() => {
        // カウンターが変わりました！
    }, [router.query.counter])
}