import styled from 'styled-components';
export const StyledButtons = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: flex-end;
  justify-content: center;
  p {
    margin: 0;
    padding: 0;
  }
  .btn {
    padding: 0;
    border-radius: 0;
    border: 0;
    box-shadow: none;
    overflow: hidden;
    white-space: nowrap;
    text-indent: 120%;
    background-color: transparent;
    position: relative;
    width: 1.2rem;
    height: 1.2rem;

    & :hover {
        cursor: pointer;
        opacity: 0.8
      }

    &:disabled svg {
      color: lightgrey;
    }
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
