import styled from '@emotion/styled'

export const Calendar = styled.table`
    &,
    td,
    tr {
        border: 1px solid black;
    }
    td {
        width: 40px;
        text-align: center;
        &.selected {
            background-color: blueviolet;
        }
        &.other{
            background-color:gray;
        }
        &:hover {
            cursor: pointer;
        }
    }
`
