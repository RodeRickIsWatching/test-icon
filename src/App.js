import React from "react";
import styled from "styled-components";
import * as icons from "./icons";
import Header from "./components/Header";
import IconWrapper from "./components/IconWrapper";
import {CoinBtc} from '@glhf-libs/test-icon/coin'
// import * as Icon from '@glhf-libs/test-icon/icon'



const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0 0 50px 0;
  list-style: none;
  background: #000;
  color: #fff;
`;

class List extends React.Component {
  render() {
  console.log('Coin', Coin)
    return (
      <div style={{ background: "#000", color: "#fff" }}>
        <Header />
        <Container>
          {Object.keys(icons).map((key, index) => {
            const Icon = icons[key];
            return (
              <li key={index}>
                <IconWrapper>
                  <Icon />
                  <span onDoubleClick={() => handleCopyIcon(key)}>{key}</span>
                </IconWrapper>
              </li>
            );
          })}
        </Container>
        <h1>test-icons</h1>
        <Container>
          <CoinBtc></CoinBtc>
        </Container>
      </div>
    );
  }
}

// copy icon
function handleCopyIcon(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export default List;
