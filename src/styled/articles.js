import styled from 'styled-components';
export const StyledArticles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  .filters {
    display: flex;
    flex-direction: row;
    row-gap: 0;
    align-self: center;
    margin: 0;
    & ul {
      margin: 0;
      padding: 0.5rem;
    }

    & button {
      align-content: center;
      justify-content: center;
      display: flex;
      justify-content: space-between;
      column-gap: 0.3rem;
      margin: 0;
      color: #4f6d7a;
    }
    & svg {
      width: 1rem;
      color: #d5573b;
    }
    & p {
    }
  }
`;
