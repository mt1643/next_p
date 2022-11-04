import Layout1 from '../components/layout1/layout';
import Layout2 from '../components/layout2/layout';

export default function Home() {
  return (
    <div>
      テスト2333333333
    </div>
  );
}

// ページごとに異なるlayoutを適用するために「getLayout」を使用する
Home.getLayout = function getLayout(page) {
  return (
    <Layout1>
      <Layout2>
        {page}
      </Layout2>
    </Layout1>
  )
}