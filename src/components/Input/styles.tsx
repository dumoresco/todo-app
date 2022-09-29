import styled from "styled-components";

export const Container = styled.div`
  background: #25273c;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: 4px;

  input {
    flex: 1;
    font-size: 1.1rem;
    color: #c1bdda;
    padding: 15px 5px;

    ::placeholder {
      font-size: 1rem;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: 4px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    flex: 0.2;
    background: #4b2faf;
  }
`;
