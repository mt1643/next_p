import styled from "styled-components";
import StyleModule from '../styles/Style.module.css'

export default function Home() {
  return (
      <Div>
        緑div
        <h1 style={{color: "black"}}>インライン</h1>
        <Title>タイトル</Title>
        <Title2 color={0}>タイトル2</Title2>
        <h3 className={StyleModule.h3class}>style.module.cssを反映</h3>
      </Div>
  );
}

const Div = styled.div`
  color: green;
`;

const Title = styled.h1`
  font-size: 4px;
  color: red;
`;

const Title2 = styled.h1`
  font-size: 4px;
  color: ${props => props.color ? 'red' : 'blue'}
`;
