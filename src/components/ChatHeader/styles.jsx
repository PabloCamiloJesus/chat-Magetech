import styled from "styled-components";

export const Container = styled.div`
    height: 59px;
    background-image: linear-gradient(
         to left,
        #542197,
        #4c207f,
        #34125e,
        #220a44,
        #05021f
      );
    padding:10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 2px #0003;
    z-index: 1;
    color: white;
    `;

export const UserInfo = styled.div`
        display: flex;
        align-items: center;

        svg {
            width: 30px;
            height: 30px;
            background-color: #ccc;
            border-radius: 50%;
            margin-right: 10px;
            min-width: fit-content;
        }
    `;

export const NameContent = styled.div`
    display: grid;
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
`;

export const Options = styled.div`
display:flex;
gap: 10px;

svg {
    width: 24px;
    height: 24px;
    color: #fff;
    cursor: pointer;
}
`;