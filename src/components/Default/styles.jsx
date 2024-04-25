import styled from "styled-components";
import backgroundLogo from "../../assets/logo-sem-fundo.png";

export const Container = styled.div`
    width: 100%;
    background-image: radial-gradient(
        circle 450px at top center,
        #542197,
        #4c207f,
        #34125e,
        #220a44,
        #05021f
      );
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    svg {
        width: 100px;
        height: 100px;
        color: #fff;
    }
`;

export const Title = styled.h1`
    text-align: center;
    display: flex;
    gap: 30px;
    color: #fff;
    font-family: "Alfa Slab One", sans-serif;
    letter-spacing: 3px;
`;

export const Info = styled.span`
    font-size: 18px;
    text-align: center;
    max-width: 500px;
    color: #fff;
    font-family: "Open Sans", sans-serif;
`;

export const LogoTitle = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-image: url(${backgroundLogo});
    background-size: cover;
`