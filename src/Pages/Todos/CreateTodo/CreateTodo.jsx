import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
const CreateTodo = () => {
  return (
    <CreateTodoContainer>
      <div className="container">
        <div className="wrapper">
          <h1>
            Create <span className="colorize">ToDos</span>
          </h1>
          <div className="todo-create-wrapper">
            <input type="text" id="create-todo" placeholder="Create ToDos" />
            <button className="btn">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </CreateTodoContainer>
  );
};

const CreateTodoContainer = styled.div`
  position: relative;
  margin: 1rem 0rem;
  .wrapper {
    max-width: min(100% - 2rem, 500px);
    margin: 1rem auto;
    h1 {
      text-align: center;
      margin: 1rem 0rem;
      color: var(--accent-color);
    }
  }
  .todo-create-wrapper {
    position: relative;
    background-color: var(--secondary-color-alt);
    padding: 0.4rem;
    display: flex;
    align-items: stretch;
    input {
      width: 100%;
      padding: 0.7rem;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
      color: var(--accent-color);
    }
    button {
    }
  }
`;

export default CreateTodo;
