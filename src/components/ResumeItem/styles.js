import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 5px 15px;
    width: 25%;
    

    @media (max-width: 768px) {
        width: 25%;
        

        p {
            font-size: 15px;
            margin-bottom: 5px;
        }

        span {
            font-size: 12px;
        }
        
        svg {
            display: none;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`;