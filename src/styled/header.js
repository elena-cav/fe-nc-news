import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: white;
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 5px #00000044;
  justify-content: space-between;
  padding-left: 2rem;
  align-items: center;
  z-index: 2;
  min-height: 3rem;

  @media screen and (min-width: 900px) {
    box-shadow: none;
    background-color: #eaeaea;
    justify-content: center;
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

  h2 {
    @media screen and (min-width: 900px) {
      position: relative;
      left: 5%;
    }
  }

  .loggedin-user {
    padding-right: 4rem;
    width: fit-content;
    font-size: 0.9rem;
    text-align: center;

    @media screen and (min-width: 900px) {
      position: absolute;
      right: 30px;
    }
  }
`;
