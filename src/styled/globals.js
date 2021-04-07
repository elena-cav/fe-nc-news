import styled from 'styled-components';
export const Globals = styled.div`
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    padding: 0.5rem 0 1rem 0;
    color: #d5573b;
  }
  p {
    text-align: left;
    color: #4f6d7a;
  }

  button {
    width: fit-content;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    padding: 0.4rem;
    align-items: center;
    color: #d5573b;
    background-color: white;
    border-radius: 0.9rem;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s linear;
  }
  button:hover {
    transform: scale(1.03);
    background-color: #f5f5f5;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #45b69c;
    font-weight: 600;
  }
  a:hover {
    opacity: 0.7;
  }
`;
