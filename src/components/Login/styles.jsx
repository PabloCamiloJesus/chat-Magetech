import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    circle 450px at top center,
    #542197,
    #4c207f,
    #34125e,
    #220a44,
    #05021f
  );
`;

export const LoginBox = styled.div`
  height: 70vh;
  width: 80%;
  margin: 0 100px;
  margin-top: 100p;
  transition: all 0.3s;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#05021f")};
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#05021f")};;
  display: flex;
  // justify-content: flex-start;
  align-items: center;
  border-radius: 5%;
  color: #fff;
  position: relative;
`;

export const Image = styled.img`
  filter: opacity(90%);
  height: 100%;
  width: 50%;
  border-radius: 5% 5% 5% 5%;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.p`
  font-family: "Alfa Slab One", sans-serif;
  font-weight: 500;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  transition: all 0.3s;
  color: ${({ isDarkMode }) => (isDarkMode ? "#05021f" : "#fff")};
    
`;

export const Text = styled.p`
  font-size: 24px;
  transition: all 0.3s;
  color:  ${({ isDarkMode }) => (isDarkMode ? "#05021f" : "#fff")};
  margin-top: 30px;
  font-style: italic;
`;
export const Button = styled.button`
  outline: none;
  color: #fff;
  background-color: #8217fc;
  color: #fff;
  border: none;
  font-size: 18px;
  padding: 14px 18px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20%;
  transition: all 0.25s;
  border: 2px solid transparent;

  &:hover {
    background-color: transparent;
    color:  ${({ isDarkMode }) => (isDarkMode ? "#05021f" : "#fff")};
    border: 2px solid ${({ isDarkMode }) => (isDarkMode ? "#05021f" : "#fff")};
  }
`;

export const ThemeButton = styled.button`
  margin-top: 60px;
  padding: 5px;
  background: transparent;
  border: none;
  outline: none;
  transition: all 0.3s;
  color: ${({ isDarkMode }) => (isDarkMode ? "#05021f" : "#fff")};
  scale: 3;
`;