import styled from "styled-components";
import backgroundLogo from "../../assets/logo-com-fundo.jpeg";

export const Container = styled.div`
    width: 100%;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    svg {
        width: 100px;
        height: 100px;
        color: green;
    }
`;

export const Title = styled.h1`
    text-align: center;
    display: flex;
    gap: 30px;
`;

export const Info = styled.span`
    font-size: 18px;
    text-align: center;
    max-width: 500px;
`;

export const LogoTitle = styled.div`
    height: 75px;
    width: 75px;
    border-radius: 50%;
    background-image: url(${backgroundLogo});
    background-size: cover;
`