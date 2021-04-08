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

    & textarea {
      max-width: 640px;
      min-width: 200px;
    }

    & p {
      margin: 0;
      font-size: 0.9rem;
      text-align: center;
      line-height: 1rem;
    }
  }
`;
