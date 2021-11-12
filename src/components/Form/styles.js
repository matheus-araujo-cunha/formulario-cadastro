import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  border-radius: 10pt;
  background-color: #282c34;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 350px;
  width: 85vw;

  @media (min-width: 800px) {
    width: 30vw;
  }
`;

export const SectionInput = styled.section`
  display: flex;
  width: 75%;
  height: 200px;
  justify-content: space-between;
  flex-direction: column;
`;

export const RegisterInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  outline: none;
  color: white;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  box-sizing: border-box;
  padding: 10px 15px;
  height: 30px;
  width: 100%;
`;

export const MessageError = styled.span`
  font-size: 0.6rem;
  margin-left: 15px;
  margin-top: 5px;
  text-align: left;
  color: tomato;
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  color: white;
  border-radius: 20pt;
  background-color: #2b59c3;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 15px 20px;
  height: 40px;
  width: 75%;
  cursor: pointer;
  //D36582
  //2b59c3
  //a33b20
  //5C0029

  :hover {
    filter: contrast(200%);
  }
`;
