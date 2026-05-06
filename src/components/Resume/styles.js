import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  gap: 20px;
  display: flex;
  margin-top: -50px;
  justify-content: space-around;
  font-family: "Huninn", sans-serif;

  @media (max-width: 768px) {
    margin-top: -30px;
  }

`;
