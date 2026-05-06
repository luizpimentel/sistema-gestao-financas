import React from 'react';
import * as S from './styles';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from 'react-icons/fa';

const GridItem = ({ item, onDelete }) => {
    return (
        <S.Tr>
            <S.Td>{item.desc}</S.Td>
            <S.Td>{item.amount}</S.Td>
            <S.Td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="#ed3838" />
                ) : (
                    <FaRegArrowAltCircleUp color="#5B7E3C" />
                )}
            </S.Td>
            <S.Td alignCenter>
                <FaTrash cursor="pointer" color="#ed3838" onClick={() => onDelete(item.id)} />
            </S.Td>
        </S.Tr>
    );
};

export default GridItem;