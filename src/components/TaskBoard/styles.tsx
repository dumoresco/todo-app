import styled from "styled-components";

export const Container = styled.div`
  background: #25273c;
  border-radius: 4px;
  margin-top: 20px;
  width: 100% !important;
  display: flex;
  align-items: center;
  padding: 0 10px;
  flex-direction: column;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #646b94;
    }
  }

  footer {
    width: 490px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-top: 1px solid #36384d;

    button,
    span {
      color: #484a62;
      font-size: 1rem;
    }
    .active {
      color: #4773d8;
    }
    .button-group {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
