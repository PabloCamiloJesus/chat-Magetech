import React from "react";
import { Circle } from "better-react-spinkit";
import * as C from "./styles";

const Loading = () => {
  return (
    <C.Container>

      {/* Tela de Loading puxando um Elemento de uma biblioteca React */}
      <Circle />
    </C.Container>
  );
};

export default Loading;
