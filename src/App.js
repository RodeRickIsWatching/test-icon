import React from "react";
import styled from "styled-components";
import * as icons from "./icons";
import Header from "./components/Header";
import IconWrapper from "./components/IconWrapper";
// import {CoinBtc} from '@glhf-libs/test-icon/coin'
// import * as Icon from '@glhf-libs/test-icon/icon'
import * as coin from "@glhf-libs/test-icon/coin";
import * as icon from "@glhf-libs/test-icon/icon";
import * as color from "@glhf-libs/test-icon/color";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0 0 50px 0;
  list-style: none;
  // background: #000;
  color: #000;
`;

class List extends React.Component {
  render() {
    return (
      <div>
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
        <br></br>

        <h1>coin</h1>
        <Container>
          {Object.keys(coin).map((key, index) => {
            const Icon = coin[key];
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
        <br></br>

        <h1>icon</h1>
        <Container>
          {Object.keys(icon).map((key, index) => {
            const Icon = icon[key];
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
        <br></br>

        <h1>color</h1>
        <Container>
          {Object.keys(color).map((key, index) => {
            const Icon = color[key];
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
