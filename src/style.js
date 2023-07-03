import styled from "styled-components";



export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.alabaster};
    width: 700px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;

    @media (max-width: ${({ theme }) => theme.brakepoint.mobileMax}px) {
        max-width: 400px;
        margin: 0 auto;

}`;



export const Header = styled.header`
font-size: 2em;
margin: 0.67em 0;
font-weight: bold;
text-align: center;
`;