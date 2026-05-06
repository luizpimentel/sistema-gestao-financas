import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 1120px;
    margin: 20px auto;
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px 15px;
    gap: 10px;
    font-family: "Huninn", sans-serif;

    @media (max-width: 768px) {
        display: grid;
        justify-content: normal;
    }   
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;

    /* Remove os botões de incremento/decremento para inputs do tipo number */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    

    input {
        margin-left: 20px;
        accent-color: #000000;
        margin-top: 0px;
        margin-right: 5px;
    }

    @media (max-width: 768px) {
        justify-content: center;

    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background: #FF9D23;
    margin-left: 10%;
    font-family: "Huninn", sans-serif;


    @media (max-width: 768px) {
        margin-left: 0px;
    }
`;

