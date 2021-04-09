import styled from 'styled-components';

export const StyledHeader = styled.div`
  box-sizing: border-box;
  background-color: white;
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 5px #00000044;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  z-index: 2;
  min-height: 3rem;

  @media screen and (min-width: 900px) {
    box-shadow: none;
    background-color: #eaeaea;
    padding-left: calc(2rem + 173.11px);
  }

  h2 {
    @media screen and (min-width: 900px) {
      display: flex;
    }

    a {
      color: inherit;
      @media screen and (min-width: 900px) {
        justify-self: center;
      }
    }
  }

  .nav-btn {
    top: 2rem;
    left: 1.5rem;
    width: 2rem;
    fill: #d5573b;
    z-index: 2;
    cursor: pointer;

    @media screen and (min-width: 900px) {
      display: none;
    }
  }

  .loggedin-user {
    color: #d5573b;
    display: flex;
    font-size: 0.9em;

    @media screen and (min-width: 900px) {
      margin-left: auto;
    }

    svg {
      width: 1em;
      margin-right: 5px;
    }
  }
`;
