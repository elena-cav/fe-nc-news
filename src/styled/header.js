import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: white;
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 5px #00000044;

  .nav-btn {
    top: 2rem;
    left: 1.5rem;
    width: 2rem;
    fill: #d5573b;
    z-index: 2;
    cursor: pointer;
  }

  .loggedin-user {
    background-color: white;
    width: fit-content;
    font-size: 0.9rem;
    padding: 0 0.5rem 0 0.5rem;
    right: 0;

    & p {
      text-align: center;
    }
  }
`;
