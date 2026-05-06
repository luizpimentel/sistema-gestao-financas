import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
    text-align: center;
    background-color: #5B7E3C;
`;

export const Header = styled.h1`
    font-family: "Huninn", sans-serif;
    font-size: 3rem;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

export const Title = styled.div`
    padding-top: 20px;
    color: white;

    @media (max-width: 768px) {
        padding-top: 50px;
    }
`;
