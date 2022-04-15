import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";
import useTodos from "../../../Hooks/useTodos";
const Todo = () => {
  const { toDos, loading } = useTodos();

  return (
    <TodoContainer>
      <div className="container">
        {toDos.length > 0 ? (
          !loading ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ToDo</th>
                  <th style={{ width: "100px" }}>Action</th>
                  <th style={{ width: "100px" }}>Edit</th>
                  <th style={{ width: "100px" }}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {toDos.map((todo, ind) => (
                  <tr key={todo.id}>
                    <td title={todo.id}>
                      {Number(ind + 1) + " - " + todo.id.slice(0, 3)}
                    </td>
                    <td>{todo.todo}</td>
                    <td>
                      <span className="cursor-pointer check">
                        <BiCheckDouble />
                      </span>
                    </td>
                    <td>
                      <span className="cursor-pointer">
                        <FiEdit />
                      </span>
                    </td>
                    <td>
                      <span className="cursor-pointer">
                        <BsTrash />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            "loading..."
          )
        ) : (
          "No toDos Yet."
        )}
      </div>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  position: relative;
  color: var(--accent-color);

  .check {
    font-size: 2rem;
    color: #07e530ec;
  }
`;

export default Todo;
