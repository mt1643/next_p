
const someFunction = (val) => {
  console.log(val);
}

function Home() {
  return (
    <div>
        <button onClick={() => someFunction(444)}>Button</button>
    </div>
  );
}

export default Home;