import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";
const Todo = () => {
  return (
    <TodoContainer>
      <div className="container">
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
            <tr>
              <td>1</td>
              <td>Get out outside</td>
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
          </tbody>
        </table>
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
