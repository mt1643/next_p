import Child from "./child";

const news = [
  {
    id: "1",
    title: "test1",
    content: "texttext1",
  },
  {
    id: "2",
    title: "test2",
    content: "texttext2",
  },
];

function HomePage() {
  return <Child news={news} />;
}

export default HomePage;