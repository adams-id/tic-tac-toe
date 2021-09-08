import styled from 'styled-components/macro';
import * as s from '../../constants/styles';

export const Frame = styled.div`
    display: grid;
    background: ${s.primaryColor};
    --boardWidth: 70vh;
    --gridGap: 2px;
    --totalCellWidth: calc(0.8 * (var(--boardWidth) - var(--gridGap)));
    height: var(--boardWidth);
    width: var(--boardWidth);

    grid-template-columns: ${({size}) => `repeat(${size}, 1fr)`};
    grid-template-rows: ${({size}) => `repeat(${size}, 1fr)`};
    gap: var(--gridGap);

    font-size: ${({size}) => `calc(var(--totalCellWidth) / ${size})`};
    font-weight: 200;
`;

export const Cell = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background: ${s.backgroundColor};
    color: ${({playerColor}) => playerColor ? playerColor : s.primaryColor};
    font-weight: ${({winCell}) => winCell ? '600' : 'inherit'};

    :hover {
        background: ${({playerBgColor}) => playerBgColor ? playerBgColor : s.secondaryColor};
    }
`;