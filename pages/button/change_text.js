import React, { useState } from 'react';

function Count() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("文字A");

    function aaa() {
      console.log("aaaa");
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>カウント: { count }</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

            <h1>Text</h1>
            <h2>テキスト: { text }</h2>
            <button onClick={() => setText("文字A")}>変更A</button>
            <button onClick={() => setText("文字B")}>変更B</button>

            <h1>Funtion</h1>
            <button onClick={aaa}>function</button>
        </div>
  );
}

export default Count;
