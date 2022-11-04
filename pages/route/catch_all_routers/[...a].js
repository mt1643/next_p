import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    console.log(router.query);
    return (
        <div> /pages/route/catch_all_routers/[...a].js </div>
    );
}