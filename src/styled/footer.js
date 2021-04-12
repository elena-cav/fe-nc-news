import styled from 'styled-components';
export const StyledFooter = styled.div`
  text-align: center;
  position: relative;
  padding: 1rem 0 1rem 0;
  display: column;
  justify-content: center;
  background-color: #eaeaea;

  @media screen and (min-width: 900px) {
    padding-left: calc(2rem + 173.11px);
  }

  .social-icon svg {
    padding: 0.5rem;
    color: #4f6d7a;
    width: 1.5rem;
    transition: all 0.2s linear;
  }

  .social-icon svg:hover {
    color: #d5573b;
  }

  .footer-text {
    color: #4f6d7a;
    font-weight: 400;
  }
`;
