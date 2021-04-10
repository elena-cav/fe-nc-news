import styled from 'styled-components';
export const StyledInputBar = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    border-style: solid, 3;
    padding: 1rem;
    row-gap: 1rem;
    align-items: center;

    button:hover {
      transform: scale(1.03);
      background-color: #f5f5f5;
      cursor: pointer;
    }

    & label {
      color: #4f6d7a;
    }
    & textarea {
      max-width: 640px;
      min-width: 200px;

      @media screen and (min-width: 500px) {
        width: 380px;
      }

      @media screen and (min-width: 800px) {
        width: 600px;
      }
    }

    & p {
      margin: 0;
      font-size: 0.9rem;
      text-align: center;
      line-height: 1rem;
    }
  }
`;
