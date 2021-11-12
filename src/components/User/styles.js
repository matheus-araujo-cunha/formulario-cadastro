import styled from "styled-components";

export const DivUser = styled.div`
  padding: 20px;
  background-color: #111215;
  width: 90vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 30px;
    width: 80%;
    text-align: center;
  }

  @media (min-width: 600px) {
    width: 60vw;
  }
`;

export const ButtonUser = styled.button`
  padding: 15px 20px;
  border-radius: 20pt;
  width: 25vw;
  text-align: center;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  background-color: #5c0029;

  :hover {
    color: white;
    filter: contrast(70%);
  }
`;
