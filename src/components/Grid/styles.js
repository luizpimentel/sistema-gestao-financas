import styled from 'styled-components';

export const Table = styled.table`
    width: 98%;
    max-width: 1120px;
    padding: 20px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    padding-bottom: 5px;
    border-bottom: inset;
`;