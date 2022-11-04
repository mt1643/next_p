import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const { foo } = router.query;
  const { too } = router.query;

  return (
    <div>
        <p>user_id: {user_id}</p>
        <p>foo: {foo}</p>
        <p>too: {too}</p>
    </div>
  );
};

export default Post;