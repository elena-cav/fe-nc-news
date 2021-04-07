import styled from 'styled-components';
export const StyledInputBar = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    border-style: solid, 3;
    margin-bottom: 1rem;
    padding: 1rem;
    row-gap: 1rem;
    align-items: center;

    & textarea {
      max-width: 640px;
    }
  }
`;
