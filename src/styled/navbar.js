import styled from 'styled-components';

export const StyledNavBar = styled.div`
  position: relative;
  .nav-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    fill: #d5573b;
  }

  .nav-close {
    color: #d5573b;

    svg {
      width: 1.5rem;
      padding: 0.5rem 2rem;
    }
  }
  .navbar {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 10px #00000044;
    z-index: 999;
    padding: 1rem 0;
    font-size: 1.3rem;
    text-align: left;
    transform: translateX(-120%);
    transition: transform 0.2s ease-in-out;

    &--open {
      transform: translateX(0);
    }
  }

  .nav-items {
    padding: 0;
    margin: 0;

    svg {
      width: 1em;
      height: 1em;
      color: #4f6d7a;
    }

    a {
      display: block;
      color: #4f6d7a;
      text-transform: uppercase;
      padding: 0.5rem 2rem;
    }
  }
  @media screen and (min-width: 900px) {
    .nav-btn,
    .nav-close {
      display: none;
    }
  }
`;

// ${(props) =>
//         !props.isActive ? '#fff1e6' : '#a5a58d'};
