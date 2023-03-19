import styled from "styled-components";

export const PaginationButton = styled.button`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-right: 1rem;
    padding: 0.5rem 0.75rem;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    white-space: nowrap;
    &:hover {
        background-color: #e9ecef;
        border-color: #ddd;
        color: #333;
    }
    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    &:active {
        background-color: #e9ecef;
        border-color: #ddd;
        color: #333;
    }
`;