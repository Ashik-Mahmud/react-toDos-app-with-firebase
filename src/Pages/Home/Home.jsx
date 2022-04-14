import React from "react";
import styled from "styled-components";
import CreateTodo from "../Todos/CreateTodo/CreateTodo";
import Todo from "../Todos/Todo/Todo";
const Home = () => {
  return (
    <HomeContainer>
      <CreateTodo />
      <Todo />
    </HomeContainer>
  );
};
const HomeContainer = styled.section`
  position: inherit;
`;
export default Home;
