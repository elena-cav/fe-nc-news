import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  .loggedin-user {
    position: absolute;
    background-color: white;
    width: fit-content;
    font-size: 0.9rem;
    padding: 0 0.5rem 0 0.5rem;
    right: 0;
    box-shadow: 0 0 5px #00000044;

    & p {
      text-align: center;
    }
  }
`;
