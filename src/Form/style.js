import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    justify-content: flex-start;
`;

export const Span = styled.span`
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    font-weight: 700;
    font-size: 15px;
`;

export const Input = styled.input`
    display: flex;
    flex-grow: 3;
    padding: 5px;
    font-size: 15px;
    border-width: 0px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 28px;
    box-shadow: 0px 0px 5px rgba(66,66,66,.75);

`;

export const Button = styled.button`
    background-color: rgb(107, 134, 77);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    display: block;
    width: 100%;
    height: 35px;

    &:hover {
    background-color: rgb(161, 201, 116);
    border: none;
    color: white;
    }
`;

export const Select = styled.select`
    display: flex;
    flex-grow: 3;
    padding: 5px;
    font-size: 15px;
    border-width: 0px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 28px;
    box-shadow: 0px 0px 5px rgba(66,66,66,.75);
    
`;
