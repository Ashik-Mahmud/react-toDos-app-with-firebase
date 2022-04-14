import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AiOutlineLogout } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../../App";
import { auth } from "../../../Firebase/Firebase.config";
const CreateTodo = () => {
  const { loading, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  /* handleLogOut */
  const handleLogOut = () => {
    signOut(auth).then(() => {
      toast.success("Log out successfully done.");
      navigate("/login");
      setIsAuth(false);
    });
  };

  return (
    <CreateTodoContainer>
      <div className="container">
        <div className="title">
          <h3>
            ToDos By
            <span className="colorize"> {auth?.currentUser?.displayName}</span>
          </h3>
          <div className="action">
            <img
              width={50}
              src={
                loading
                  ? "https://www.commpartners.com/wp-content/plugins/wp-meta-seo/assets/images/white-loader.gif"
                  : auth?.currentUser?.photoURL
              }
              alt={auth?.currentUser?.displayName}
            />
            <span
              onClick={handleLogOut}
              className="cursor-pointer text-danger d-flex"
            >
              <AiOutlineLogout />
              Log out
            </span>
          </div>
        </div>
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
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--secondary-color-alt);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: var(--accent-color);
    .action {
      position: relative;
      display: flex;
      gap: 1rem;
      img {
        border-radius: 50%;
      }
    }
  }
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
