import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  transition: background-color 0.3s;
  .remove {
    display: none;
    transition: display 0.2s;
    img {
      max-width: 20px;
      opacity: 0.2;
    }

    :hover {
      img {
        opacity: 0.5;
      }
    }
  }
  :hover {
    background-color: #282b41;
    border-radius: 5px;
    .remove {
      display: flex;
    }
  }
  span {
    font-size: 1.3rem;
  }

  li {
    padding: 15px;
    display: flex;
    align-items: center;
    border-top: 1px solid #36384d;

    .name-container {
      display: flex;
    }
    display: flex;
    justify-content: space-between;
    span {
      justify-content: flex-start;
    }
  }
  li:first-child {
    border-top: 1px solid transparent;
  }

  input {
    font-size: 1.3rem;
    font-weight: 400;
    color: #c1bdda;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: block;
    position: relative;
    padding-left: 35px;
    padding-bottom: 25px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  input[type="checkbox"]:hover + label:hover {
    color: #4b2faf;
  }
  input[type="checkbox"]:hover + label:before {
    border: 1px solid #343a3f;
    width: 1.2em;
    height: 1.2em;
    border: 2px solid #fff;
    background: #4b2faf;
  }

  input[type="checkbox"] + label:before {
    content: "";
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid #343a3f;
    border-radius: 1em;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: all 0.2s, transform 0.3s ease-in-out;
    transition: all 0.2s, transform 0.3s ease-in-out;
  }
  input[type="checkbox"]:checked + label:before {
    border-radius: 1em;
    border: 2px solid #fff;
    width: 1.2em;
    height: 1.2em;
    background: #4b2faf;

    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
`;
