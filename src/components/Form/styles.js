import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    max-width: 1100px;
    margin: 20px auto;
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 768px) {
        display: grid;
    }   
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 10%;

    @media (max-width: 768px) {
        margin-left: 0px;
    }
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10%;

    input {
        margin-left: 20px;
        accent-color: #000000;
        margin-top: 0px;
        margin-right: 5px;
    }

    @media (max-width: 768px) {
        margin-left: 0px;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background: teal;
    margin-left: 10%;

    @media (max-width: 768px) {
        margin-left: 0px;
    }
`;

