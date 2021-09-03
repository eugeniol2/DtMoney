import styled from "styled-components";


export const Container = styled.div`

    margin-top: 4rem;

    table {
        border-spacing: 0 0.5rem;
        width: 100%;

        th {
            color: var(--text-body);
            font-weight: 500;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
        
            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        
        
        }



    }





`;