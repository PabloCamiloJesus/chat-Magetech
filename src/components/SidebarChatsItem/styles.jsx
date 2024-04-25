import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding:15px 20px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        background-color: plum;
        color: white;
    }

    svg{
        width: 30px;
        height: 30px;
        background-color: purple;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }

    &.active{
        background-color: purple;
        color: white;
    }
`;

export const Name = styled.span`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
`