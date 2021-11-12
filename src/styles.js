import styled from "styled-components";

import image from "./images/colorful-2174045.png";

import secondImage from "./images/background-1789175.png";

const AppHeader = styled.section`
  min-height: 100vh;
  background-image: url(${(props) =>
    `${props.isLogged ? secondImage : image}`});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default AppHeader;
