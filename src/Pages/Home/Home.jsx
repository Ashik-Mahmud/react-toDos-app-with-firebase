import React from "react";
import styled from "styled-components";
import CreateTodo from "../Todos/CreateTodo/CreateTodo";

const Home = () => {
  return (
    <HomeContainer>
      <CreateTodo />
    </HomeContainer>
  );
};
const HomeContainer = styled.section`
  position: inherit;
`;
export default Home;
